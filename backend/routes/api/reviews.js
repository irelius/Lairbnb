const { Op } = require("sequelize");
const express = require('express')
const router = express.Router();

const { User, Spot, Image, Review } = require('../../db/models');

const { validateReviews } = require('../../utils/validations');
const { restoreUser, authRequired } = require("../../utils/authentication.js");
const { reviewAuthorization } = require("../../utils/authorization")
const { notFound } = require('../../utils/helper.js')

// ___________________________________________________________________________________________________________________

// Get all Reviews of the Current User
router.get("/current", [restoreUser, authRequired], async (req, res, next) => {
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
                attributes: ["id", "type", "typeId", "url"]
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
router.get("/:reviewId", [restoreUser, authRequired], async (req, res, next) => {
    const review = await Review.findByPk(req.params.reviewId, {
        include: [
            {
                model: User,
                attributes: ["id", "firstName", "lastName"]
            },
            {
                model: Spot,
                attributes: { exclude: ["address", "city", "state", "country", "lat", "lng", "price", "numReviews"] }
            }
        ]
    })
    if (review) {
        res.json(review)
    } else {
        res.json({})
    }
})


// Get all Reviews by a Spot's id
router.get("/spot/:spotId", async (req, res, next) => {
    const spot = await Spot.findByPk(req.params.spotId);

    // error if spot doesn't exist
    if (!spot) {
        return next(notFound("Spot", 404))
    }

    // separate reviews made by current user or by other users
    let userReviews;
    let otherReviews;

    if (req.user === null) {
        userReviews = []
        otherReviews = await Review.findAll({
            where: {
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
                    attributes: ["id", "type", "typeId", "url"]
                }
            ]
        })
    } else {
        // Get user's reviews for spot
        userReviews = await Review.findAll({
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
                    attributes: ["id", "type", "typeId", "url"]
                }
            ]
        })

        // find all reviews excluding current user's
        otherReviews = await Review.findAll({
            where: {
                userId: {
                    [Op.not]: req.user.id
                },
                spotId: req.params.spotId
            },
            include: [
                {
                    model: User,
                    attributes: ["id", "firstName", "lastName"]
                },
                {
                    model: Image,
                    attributes: ["id", "type", "typeId", "url"]
                }
            ]
        })
    }

    return res.json({
        userReviews: userReviews,
        otherReviews: otherReviews
    })
})

// Create a Review for a Spot based on the Spot's id
router.post("/spot/:spotId", [validateReviews, restoreUser, authRequired], async (req, res, next) => {
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
        return next(error);
    }
    const newReview = await Review.create({
        userId: req.user.id,
        spotId: req.params.spotId,
        review: review,
        stars: stars
    })

    // Review this route to check if any images were attached. will need to create a new entry in the image table
    res.status(201).json(newReview)
})

// Edit a Review
// TODO: i don't like how i have the validation here, try to figure out how to implement validation on models and format the try-catch
router.put("/:reviewId", [validateReviews, restoreUser, authRequired, reviewAuthorization], async (req, res, next) => {
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
router.delete("/:reviewId", [restoreUser, authRequired, reviewAuthorization], async (req, res, next) => {
    // destroy review
    await Review.destroy({
        where: {
            id: req.params.reviewId
        }
    })
    res.status(200).json({
        id: parseInt(req.params.reviewId),
        message: "Successfully deleted",
        statusCode: 200
    })
})


module.exports = router;
