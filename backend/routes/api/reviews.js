const express = require('express')
const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validations');

const { setTokenCookie, requireAuth, restoreUser, authenticationRequired, authorizationRequiredReviews } = require('../../utils/auth');
const { User, Spot, Image, Review } = require('../../db/models');


// helper function for a particular element not found
const notFound = (el, code) => {
    let error = new Error(`${el} couldn't be found`);
    error.status = code;
    error.statusCode = code;
    return error
}

const validateReviews = [
    check("review")
        .notEmpty()
        .withMessage("Review test is required"),
    check("stars")
        .notEmpty()
        .isInt({ min: 1, max: 5 })
        .withMessage("Stars must be an integer from 1 to 5"),
    handleValidationErrors
]


// ___________________________________________________________________________________________________________________

// Get all Reviews of the Current User
router.get("/current", [restoreUser, authenticationRequired], async (req, res, next) => {
    const allReviews = await Review.findAll({
        where: {
            userId: req.user.id
        },
        include: [
            {
                model: User,
                attributes: ["id", "firstName", "lastName"]
            },
            {
                model: Spot,
                attributes: { exclude: ["description", "numReviews", "avgStarRating", "createdAt", "updatedAt", "OwnerId"] }
            },
            {
                model: Image,
                attributes: ["id", ["spotId", "imageableId"], ["reviewId", "imageableId"], "url"]
            }
        ]
    })

    if (allReviews.length === 0) {
        res.json([])
    } else {
        res.json(allReviews)
    }
})


// Get a Review by its ID number
router.get("/:reviewId", [restoreUser, authenticationRequired], async (req, res, next) => {
    const review = await Review.findByPk(req.params.reviewId, {
        include: [
            {
                model: User,
                attributes: ["id", "firstName", "lastName"]
            },
            {
                model: Spot,
                attributes: { exclude: ["description", "numReviews", "avgStarRating", "createdAt", "updatedAt", "OwnerId"] }
            }
        ]
    })
    if (review) {
        res.json(review)
    } else {
        res.json({})
    }
})


// Get the review of a particular spot that belongs to the current user
router.get("/spot/:spotId/current", [restoreUser, authenticationRequired], async (req, res, next) => {
    const review = await Review.findAll({
        where: {
            userId: req.user.id,
            spotId: req.params.spotId
        },
        include: [
            {
                model: User,
                attributes: ["id", "firstName", "lastName"]
            },
            {
                model: Spot,
                attributes: { exclude: ["description", "numReviews", "avgStarRating", "createdAt", "updatedAt", "OwnerId"] }
            },
            {
                model: Image,
                attributes: ["id", ["spotId", "imageableId"], ["reviewId", "imageableId"], "url"]
            }
        ]
    })
    res.json(review)

})


// Get all Reviews by a Spot's id
router.get("/spot/:spotId", async (req, res, next) => {
    const spotId = await Spot.findByPk(req.params.spotId);
    // error if spot doesn't exist
    if (!spotId) {
        return next(notFound("Spot", 404))
    }
    // find all reviews based on spot id
    const reviews = await Review.findAll({
        where: {
            spotId: req.params.spotId
        },
        include: [
            {
                model: User,
                attributes: ["id", "firstName", "lastName"]
            },
            {
                model: Image,
                attributes: ["id", ["spotId", "imageableId"], ["reviewId", "imageableId"], "url"]
            }
        ]
    })
    res.json(reviews)
})


// Create a Review for a Spot based on the Spot's id
router.post("/spot/:spotId", [validateReviews, restoreUser, authenticationRequired], async (req, res, next) => {
    const { review, stars } = req.body;
    const currentReviews = await Review.findAll({
        where: {
            spotId: req.params.spotId,
            userId: req.user.id
        }
    })
    const findSpot = await Spot.findByPk(req.params.spotId)
    // error if spot doesn't exist
    if (!findSpot) {
        return next(notFound("Spot", 404));
    }
    // error if there is already a review
    if (currentReviews.length > 0) {
        const error = new Error("User already has a review for this spot");
        error.status = 403;
        error.statusCode = 403;
        return next(error);
    }
    const newReview = await Review.create({
        userId: req.user.id,
        spotId: req.params.spotId,
        review: review,
        stars: stars
    })
    res.status(201).json(newReview)
})


// Edit a Review
// TODO: i don't like how i have the validation here, try to figure out how to implement validation on models and format the try-catch
router.put("/:reviewId", [validateReviews, restoreUser, authenticationRequired, authorizationRequiredReviews], async (req, res, next) => {
    const { review, stars } = req.body;
    const updateReview = await Review.findByPk(req.params.reviewId)
    // update review
    updateReview.update({
        review: review,
        stars: stars
    })
    updateReview.updatedAt = new Date()
    res.status(200).json(updateReview)
})


// Delete a Review
router.delete("/:reviewId", [restoreUser, authenticationRequired, authorizationRequiredReviews], async (req, res, next) => {
    // destroy review
    await Review.destroy({
        where: {
            id: req.params.reviewId
        }
    })
    res.status(200).json({
        message: "Successfully deleted",
        statusCode: 200
    })
})


module.exports = router;
