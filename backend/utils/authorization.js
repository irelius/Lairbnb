// backend/utils/authorization.js

const { Spot, Image, Review, Booking, User } = require('../db/models');
const { notFound, forbidden, unexpectedError, validationError } = require('./helper')

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

// Authorization required for Reviews. Current user must be the review creator
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

// Owner should not be able to make a review to their own spot
const reviewOwnerAuthorization = async function (req, res, next) {
    const spot = await Spot.findByPk(req.params.spotId)
    if (!spot) {
        return next(notFound("Spot", 404))
    }
    if (req.user.id === spot.ownerId) {
        const error = new Error("Owners cannot leave a review for their own hosting. (You fraud).")
        error.status = 403
        return next(error)
    }
    return next()
}


// ----------------------------------- Booking Authorization Methods -----------------------------------

// Owner should not be able to make a booking to their own spot
const bookingOwnerAuthorization = async function (req, res, next) {
    const spot = await Spot.findByPk(req.params.spotId);
    if (!spot) {
        return next(notFound("Spot", 404))
    }
    if (req.user.id === spot.ownerId) {
        const error = new Error("you own this location... why would you? wut?")
        error.status = 403
        return next(error)
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
const imageTypeCheck = async function (req, res, next) {
    try {
        if (req.params.type !== "spot" && req.params.type !== "review" && req.params.type !== "profile") {
            return next(notFound(`Images of ${req.params.type} type`, 404))
        }

        return next();
    } catch (e) {
        unexpectedError(res, e)
    }
}


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
    }
    // check if user uploading image is the owner of account for profile pic
    else if (type === "profile") {
        const account = await User.findByPk(typeId)

        if (!account) {
            return next(notFound("User"), 404)
        }
        if (account.id !== req.user.id) {
            return next(forbidden())
        }
    } else {
        return next(validationError("Images must be for spots, reviews, or profile image", 400))
    }

    return next()
}

module.exports = {
    spotAuthorization,
    reviewOwnerAuthorization,
    reviewAuthorization,
    bookingOwnerAuthorization,
    bookingAuthorization,
    imageTypeCheck,
    imagesAuthorization,
}
