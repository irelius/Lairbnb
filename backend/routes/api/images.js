const express = require('express')
const router = express.Router();

const { Image } = require('../../db/models');

const { restoreUser, authRequired } = require('../../utils/authentication');
const { imagesAuthorization, imageTypeCheck } = require("../../utils/authorization")
const { notFound, forbidden, unexpectedError } = require('../../utils/helper.js');
const { multipleMulterUpload, multiplePublicFileUpload, singlePublicFileUpload } = require('../../awsS3.js');


// ____________________________________________________________________________________

// Get all Images
router.get("/", async (req, res) => {
    try {
        const images = await Image.findAll()
        res.json({ images })
    } catch (e) {
        unexpectedError(res, e)
    }
})

// Get one image by pk
router.get('/:imageId', async (req, res, next) => {
    try {
        const image = await Image.findByPk(req.params.imageId)

        if (!image) {
            next(notFound("Image", 404))
        }

        return res.json({ image })
    } catch (e) {
        unexpectedError(res, e)
    }
})

// Get all Images by type
router.get("/type/:type", imageTypeCheck, async (req, res, next) => {
    try {
        const images = await Image.findAll({
            where: {
                type: req.params.type
            }
        })

        res.json({ images })
    } catch (e) {
        unexpectedError(res, e)
    }
})

// Get the image belonging to spot, review, or user image. type should either be "spot", "review", "user" (note singular, not plural)
router.get("/type/:type/typeId/:typeId", imageTypeCheck, async (req, res) => {
    try {
        const images = await Image.findAll({
            where: {
                type: req.params.type,
                typeId: req.params.typeId
            }
        })

        return res.json({ images })
    } catch (e) {
        unexpectedError(res, e)
    }
})

// // Create an Image - before aws
// router.post('/:type/:typeId', [validateURL, restoreUser, authRequired, imagesAuthorization], async (req, res, next) => {
//     // may need to refactor later to loop through all of the urls that is uploaded (or the images uploaded)
//     const { url } = req.body
//     const { type, typeId } = req.params

//     let typeCategory;
//     let typeRes;
//     if (type === "spot") {
//         typeCategory = "Spot"
//         typeRes = await Spot.findByPk(typeId)
//     } else {
//         typeCategory = "Review"
//         typeRes = await Review.findByPk(typeId)

//         const currImages = await Image.findAll({
//             where: {
//                 type: type,
//                 typeId: typeId
//             }
//         })

//         // if trying to add photos to a review, and user is trying to add more than 10 picutres, return error
//         if (currImages.length > 10) {
//             const error = new Error("Maximum number of images for this resource was reached")
//             error.status = 403;
//             return next(error);
//         }
//     }

//     // if spot or review doesn't exist, return 404 error
//     if (!typeRes) {
//         return next(notFound(typeCategory, 404))
//     }

//     // if spot/review exists, create new image
//     const newImage = await Image.create({
//         userId: req.user.id,
//         type: type,
//         typeId: typeId,
//         url: url,
//     })

//     res.json({
//         id: newImage.id,
//         userId: req.user.id,
//         type: newImage.type,
//         typeId: newImage.typeId,
//         url: newImage.url,
//     })
// })


router.post("/type/:type/typeId/:typeId", [restoreUser, authRequired, imagesAuthorization], multipleMulterUpload("images"), async (req, res) => {
    try {
        const { userId } = req.user.id
        const { typeId, type } = req.params

        let images;
        if (req.files) {
            images = await multiplePublicFileUpload(req.files)
        }

        if (type === "review") {
            const currImages = await Image.findAll({
                where: {
                    type: type,
                    typeId: typeId
                }
            })

            // if trying to add photos to a review, and user is trying to add more than 5 picutres, return error
            if (currImages.length + images.length > 5) {
                const error = new Error("Error: Reviews are limited to 5 images")
                error.status = 413;
                return next(error);
            }
        } else if (type === "spot") {
            // const currImages = await Image.findAll({
            //     where: {
            //         type: type,
            //         typeId: typeId
            //     }
            // })

            // // if trying to add photos to a spot, and user is trying to add more than 15 pictures, return error
            // if (currImages.length + images.length > 15) {
            //     const error = new Error("Error: Spots are limited to 15 images")
            //     error.status = 413;
            //     return next(error);
            // }
        }

        for (let i = 0; i < images.length; i++) {
            await Image.create({
                userId: userId,
                type: type,
                typeId: typeId,
                url: images[i]
            })
        }
        return res.json({ images })
    } catch (e) {
        unexpectedError(res, e)
    }
})

// Delete an Image
router.delete("/:imageId", [restoreUser, authRequired], async (req, res, next) => {
    try {
        const deleteImage = await Image.findByPk(req.params.imageId)
        // error if image doesn't exist
        if (!deleteImage) {
            return next(notFound("Image", 404))
        }

        // error if image doesn't belong to user
        if (deleteImage.userId !== req.user.id) {
            return next(forbidden())
        }

        // const deleteImageParsed = deleteImage.toJSON()
        const deleteType = deleteImage.type
        const deleteTypeId = deleteImage.typeId

        // error if image being deleted is the last image for a spot
        if (deleteType === "spot") {
            const spotImages = await Image.findAll({
                where: {
                    type: "spot",
                    typeId: deleteTypeId
                }
            })

            if (spotImages.length === 1) {
                const error = new Error("A rental spot must have at least 1 image to show to renters.")
                error.status = 403;
                return next(error);
            }
        }

        // delete image
        await Image.destroy({
            where: {
                id: req.params.imageId
            }
        })
        res.json({
            message: "Successfully deleted",
            statusCode: 200
        })
    } catch (e) {
        unexpectedError(res, e)
    }

})

module.exports = router;
