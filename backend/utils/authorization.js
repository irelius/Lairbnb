// backend/utils/authorization.js

const { Spot, Image, Review, Booking } = require('../db/models');
const { notFound, forbidden } = require('./helper')

// Authorization required for Spots
const spotAuthorization = async function (req, res, next) {
    const spot = await Spot.findByPk(req.params.spotId)
    if (!spot) {
        return next(notFound("Spot", 404))
    }
    if (req.user.id !== spot.ownerId) {
        return next(forbidden())
    }
    return next();
}

// Authorization required for Reviews
const reviewAuthorization = async function (req, res, next) {
    const review = await Review.findByPk(req.params.reviewId);
    if (!review) {
        return next(notFound("Review", 404))
    }
    if (req.user.id !== review.userId) {
        return next(forbidden())
    }
    return next();
}

// Authorization not required for Booking
const bookingOwnerAuthorization = async function (req, res, next) {
    const spot = await Spot.findByPk(req.params.spotId);
    if (!spot) {
        return next(notFound("Spot", 404))
    }
    if (req.user.id === spot.ownerId) {
        return next(forbidden())
    }
    return next();
}

// Authorization required for Booking
const bookingAuthorization = async function (req, res, next) {
    const booking = await Booking.findByPk(req.params.bookingId);
    if (!booking) {
        return next(notFound("Booking", 404))
    }
    if (req.user.id !== booking.userId) {
        return next(forbidden())
    }
    return next();
}


// Authorization required for Images
// TO DO, remove uncessary code after testing that new validation method works for all requirements
const imagesAuthorization = async function (req, res, next) {
    let type = req.params.type
    let typeId = req.params.typeId

    // check if user is owner of spot. forbidden if not owner
    if (type === "spot") {
        const spot = await Spot.findByPk(typeId)

        if (!spot) {
            return next(notFound("Spot"), 404)
        }
        if (spot.ownerId !== req.user.id) {
            return next(forbidden())
        }
    }
    // check if user is owner of review. forbidden if not reviewer
    else {
        const review = await Review.findByPk(typeId)

        if (!review) {
            return next(notFound("Review"), 404)
        }
        if (review.userId !== req.user.id) {
            return next(forbidden())
        }
    }

    return next()

    // // checking if image url is being added to a spot
    // if (req.params.spotId) {
    //     const spot = await Spot.findByPk(req.params.spotId);
    //     if (spot.ownerId !== req.user.id) {
    //         return next(forbidden())
    //     }
    //     return next();
    // }
    // // checking if image url is being added to a review
    // if (req.params.reviewId) {
    //     const review = await Review.findByPk(req.params.reviewId);
    //     if (req.user.id !== review.userId) {
    //         return next(forbidden())
    //     }
    //     return next();
    // }
    // // checking if image url is being deleted
    // if (req.params.imageId) {
    //     const deleteImage = await Image.findByPk(req.params.imageId)
    //     const reviewCheck = await Review.findOne({
    //         where: {
    //             id: deleteImage.reviewId
    //         }
    //     })
    //     const spotCheck = await Spot.findOne({
    //         where: {
    //             id: deleteImage.spotId
    //         }
    //     })
    //     if (reviewCheck && reviewCheck.userId !== req.user.id) {
    //         return next(forbidden())
    //     }
    //     if (spotCheck && spotCheck.ownerId !== req.user.id) {
    //         return next(forbidden())
    //     }
    //     return next();
    // }
}


module.exports = {
    spotAuthorization,
    reviewAuthorization,
    bookingOwnerAuthorization,
    bookingAuthorization,
    imagesAuthorization
}
