// backend/utils/authorization.js

const { Spot, Image, Review, Booking, User } = require('../db/models');
const { notFound, forbidden } = require('./helper')

// ----------------------------------- Spot Authorization Methods -----------------------------------

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


// ----------------------------------- Review Authorization Methods -----------------------------------

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


// ----------------------------------- Booking Authorization Methods -----------------------------------

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


// ----------------------------------- Image Authorization Methods -----------------------------------

// Authorization required for Images
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
    else if (type === "review") {
        const review = await Review.findByPk(typeId)

        if (!review) {
            return next(notFound("Review"), 404)
        }
        if (review.userId !== req.user.id) {
            return next(forbidden())
        }
    // check if user uploading image is the owner of account
    } else {
        const account = await User.findByPk(typeId)

        if(!account) {
            return next(notFound("User"), 404)
        }
        if(account.id !== req.user.id) {
            return next(forbidden())
        }
    }

    return next()
}

module.exports = {
    spotAuthorization,
    reviewAuthorization,
    bookingOwnerAuthorization,
    bookingAuthorization,
    imagesAuthorization
}
