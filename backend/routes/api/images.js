const express = require('express')
const router = express.Router();
const { Op } = require("sequelize")

const { check } = require('express-validator');
const { User, Spot, Image, Review } = require('../../db/models');

const { handleValidationErrors, validateURL } = require('../../utils/validations');
const { setTokenCookie, restoreUser, authRequired } = require('../../utils/authentication');
const { imagesAuthorization } = require("../../utils/authorization")
const { validationError, notFound } = require('../../utils/helper.js')


// ____________________________________________________________________________________

// Add an Image to a Spot based on the Spot's id
router.post("/spots/:spotId", [validateURL, restoreUser, authRequired], async (req, res, next) => {
    const spot = await Spot.findByPk(req.params.spotId)
    // error if spot couldn't be found
    if (!spot) {
        return next(notFound("Spot", 404))
    }
    const newImage = await Image.create({
        spotId: req.params.spotId,
        url: req.body.url
    })
    res.json({
        id: newImage.id,
        imageableId: newImage.spotId,
        url: newImage.url
    })
})


// Add an Image to a Review based on the Review's id
router.post("/reviews/:reviewId", [validateURL, restoreUser, authRequired, imagesAuthorization], async (req, res, next) => {
    const review = await Review.findByPk(req.params.reviewId)
    // error if spot couldn't be found
    if (!review) {
        return next(notFound("Review", 404))
    }
    // error due to max resources
    const allImages = await Image.findAll({
        where: {
            reviewId: {
                [Op.not]: null
            }
        }
    })
    if (allImages.length > 10) {
        const error = new Error("Maximum number of images for this resource was reached")
        error.status = 403;
        error.statusCode = 403;
        return next(error);
    }
    // create new Image for Review
    const newImage = await Image.create({
        reviewId: req.params.reviewId,
        url: req.body.url
    })
    res.json({
        id: newImage.id,
        imageableId: newImage.reviewId,
        url: newImage.url
    })
})


// Delete an Image
router.delete("/:imageId", [restoreUser, authRequired, imagesAuthorization], async (req, res, next) => {
    const deleteImage = await Image.findByPk(req.params.imageId)
    // error if image doesn't exist
    if (!deleteImage) {
        return next(notFound("Image", 404))
    }
    // successfully delete image
    await Image.destroy({
        where: {
            id: req.params.imageId
        }
    })
    res.json({
        message: "Successfully deleted",
        statusCode: 200
    })

})

module.exports = router;
