const express = require('express')
const router = express.Router();
const { Op } = require("sequelize")

const { User, Spot, Image, Review } = require('../../db/models');

const { validateURL } = require('../../utils/validations');
const { setTokenCookie, restoreUser, authRequired } = require('../../utils/authentication');
const { imagesAuthorization } = require("../../utils/authorization")
const { notFound, forbidden } = require('../../utils/helper.js');
const image = require('../../db/models/image.js');


// ____________________________________________________________________________________

// Get all Images
router.get("/", async (req, res) => {
    const images = await Image.findAll()
    res.json(images)
})

// Get one image by pk
router.get('/:imageId', async (req, res) => {
    const image = await Image.findByPk(req.params.imageId)
    res.json(image)
})

// Get all images belonging to spot or review. type should either be "spot" or "review" (note singular, not plural)
router.get("/:type/:typeId", async (req, res) => {
    const images = await Image.findAll({
        where: {
            type: req.params.type,
            typeId: req.params.typeId
        }
    })

    res.json(images)
})

// Create an Image
router.post('/', [validateURL, restoreUser, authRequired, imagesAuthorization], async (req, res, next) => {
    // router.post('/', [validateURL, restoreUser, authRequired, imagesAuthorization], async (req, res, next) => {
    const { type, typeId, url } = req.body

    let typeCategory;
    let typeRes;
    if (type === "spot") {
        typeCategory = "Spot"
        typeRes = await Spot.findByPk(typeId)
    } else {
        typeCategory = "Review"
        typeRes = await Review.findByPk(typeId)

        // error due to max resources because users can only have up to 10 pictures for their review
        // TO DO: check if the following checks are necessary on the POST route. Should be necessary for the PUT route
        const currentReviewImages = await Image.findAll({
            where: {
                type: type,
                typeId: typeId
            }
        })
        if (currentReviewImages && currentReviewImages.length > 10) {
            const error = new Error("Maximum number of images for this resource was reached")
            error.status = 403;
            error.statusCode = 403;
            return next(error);
        }
    }


    // If Spot/Review doesn't exist, return error
    if (!typeRes) {
        return next(notFound(typeCategory, 404))
    }

    // if spot/review exists, create new image
    const newImage = await Image.create({
        userId: req.user.id,
        type: type,
        typeId: typeId,
        url: url,
    })

    res.json({
        id: newImage.id,
        userId: req.user.id,
        type: newImage.type,
        typeId: newImage.typeId,
        url: newImage.url,
    })
})


// // Add an Image to a Spot based on the Spot's id
// router.post("/spots/:spotId", [validateURL, restoreUser, authRequired], async (req, res, next) => {
//     const spot = await Spot.findByPk(req.params.spotId)
//     // error if spot couldn't be found
//     if (!spot) {
//         return next(notFound("Spot", 404))
//     }
//     const newImage = await Image.create({
//         type: "spot",
//         typeId: req.params.spotId,
//         url: req.body.url
//     })
//     res.json({
//         id: newImage.id,
//         type: newImage.type,
//         typeId: newImage.typeId,
//         url: newImage.url
//     })
// })


// // Add an Image to a Review based on the Review's id
// router.post("/reviews/:reviewId", [validateURL, restoreUser, authRequired, imagesAuthorization], async (req, res, next) => {
//     const review = await Review.findByPk(req.params.reviewId)

//     // error if spot couldn't be found
//     if (!review) {
//         return next(notFound("Review", 404))
//     }

//     // error due to max resources because users can only have up to 10 pictures for their review
//     const allImages = await Image.findAll({
//         where: {
//             reviewId: {
//                 [Op.not]: null
//             }
//         }
//     })
//     if (allImages.length > 10) {
//         const error = new Error("Maximum number of images for this resource was reached")
//         error.status = 403;
//         error.statusCode = 403;
//         return next(error);
//     }

//     // create new Image for Review
//     const newImage = await Image.create({
//         type: "review",
//         typeId: req.params.spotId,
//         url: req.body.url
//     })
//     res.json({
//         id: newImage.id,
//         type: newImage.type,
//         typeId: newImage.typeId,
//         url: newImage.url
//     })
// })


// TO DO: Add a route to allow users to edit their photos

// Delete an Image
router.delete("/:imageId", [restoreUser, authRequired], async (req, res, next) => {
    const deleteImage = await Image.findByPk(req.params.imageId)
    // error if image doesn't exist
    if (!deleteImage) {
        return next(notFound("Image", 404))
    }

    if (deleteImage.userId !== req.user.id) {
        return next(forbidden())
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
