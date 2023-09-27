// backend/utils/auth.js
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User, Spot, Image, Review, Booking } = require('../db/models');

const { secret, expiresIn } = jwtConfig;

// helper function for a particular element not found
const notFound = (el, code) => {
    let error = new Error(`${el} couldn't be found`);
    error.status = code;
    error.statusCode = code;
    return error
}

const forbidden = () => {
    let error = new Error("Forbidden");
    error.status = 403;
    error.statusCode = 403;
    return error;
}


// Sends a JWT Cookie
const setTokenCookie = (res, user) => {
    // Create the token.
    const safeUser = {
        id: user.id,
        email: user.email,
        username: user.username,
    };
    const token = jwt.sign(
        { data: safeUser },
        secret,
        { expiresIn: parseInt(expiresIn) } // 604,800 seconds = 1 week
    );

    const isProduction = process.env.NODE_ENV === "production";

    // Set the token cookie
    res.cookie('token', token, {
        maxAge: expiresIn * 1000, // maxAge in milliseconds
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction && "Lax"
    });

    return token;
};


// Restore user
const restoreUser = (req, res, next) => {
    // token parsed from cookies
    const { token } = req.cookies;
    req.user = null;

    return jwt.verify(token, secret, null, async (err, jwtPayload) => {
        if (err) {
            return next();
        }

        try {
            const { id } = jwtPayload.data;
            req.user = await User.findByPk(id, {
                attributes: {
                    include: ['email', 'createdAt', 'updatedAt']
                }
            });
        } catch (e) {
            res.clearCookie('token');
            return next();
        }

        if (!req.user) res.clearCookie('token');

        return next();
    });
};

// Authentication required
const authenticationRequired = function (req, res, next) {
    const user = req.user
    if (!user) {
        const error = new Error("Authentication required");
        error.statusCode = 401;
        error.status = 401
        return next(error);
    }
    return next();
}

// Authorization required for Spots
const authorizationRequiredSpots = async function (req, res, next) {
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
const authorizationRequiredReviews = async function (req, res, next) {
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
const authorizationNotRequiredBookings = async function (req, res, next) {
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
const authorizationRequiredBookings = async function (req, res, next) {
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
const authorizationRequiredImages = async function (req, res, next) {
    // checking if image url is being added to a spot
    if (req.params.spotId) {
        const spot = await Spot.findByPk(req.params.spotId);
        if (spot.ownerId !== req.user.id) {
            return next(forbidden())
        }
        return next();
    }
    // checking if image url is being added to a review
    if (req.params.reviewId) {
        const review = await Review.findByPk(req.params.reviewId);
        if (req.user.id !== review.userId) {
            return next(forbidden())
        }
        return next();
    }
    // checking if image url is being deleted
    if (req.params.imageId) {
        const deleteImage = await Image.findByPk(req.params.imageId)
        const reviewCheck = await Review.findOne({
            where: {
                id: deleteImage.reviewId
            }
        })
        const spotCheck = await Spot.findOne({
            where: {
                id: deleteImage.spotId
            }
        })
        if (reviewCheck && reviewCheck.userId !== req.user.id) {
            return next(forbidden())
        }
        if (spotCheck && spotCheck.ownerId !== req.user.id) {
            return next(forbidden())
        }
        return next();
    }
}

// If there is no current user, return an error
const requireAuth = function (req, _res, next) {
    if (req.user) return next();

    const err = new Error('Authentication required');
    err.title = 'Authentication required';
    err.errors = { message: 'Authentication required' };
    err.status = 401;
    return next(err);
}


module.exports = {
    setTokenCookie,
    restoreUser,
    requireAuth,
    authenticationRequired,
    authorizationRequiredSpots,
    authorizationRequiredReviews,
    authorizationNotRequiredBookings,
    authorizationRequiredBookings,
    authorizationRequiredImages
};
