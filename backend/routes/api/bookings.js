const express = require('express')
const router = express.Router();

const { User, Spot, Booking } = require('../../db/models');
const { check } = require('express-validator');

const { handleValidationErrors, validateBooking } = require('../../utils/validations')
const { restoreUser, authRequired } = require("../../utils/authentication.js");
const { authorizationNotRequiredBookings, bookingAuthorization } = require("../../utils/authorization")
const { validationError, notFound } = require('../../utils/helper.js')


// helper function for a review that already exists, may not need since this only occurs once?
const bookingExists = (bookingError) => {
    let error = new Error("Sorry, this spot is already booked for the specified dates");
    error.status = 403;
    error.statusCode = 403;
    error.errors = {}
    if (bookingError.startDate) {
        error.errors.startDate = bookingError.startDate
    }
    if (bookingError.endDate) {
        error.errors.endDate = bookingError.endDate
    }
    return error
}


// ------------------------------------------------------------------------------------------------------

// Get all of the Current User's Bookings
router.get("/current", [restoreUser, authRequired], async (req, res) => {
    const Bookings = await Booking.findAll({
        where: {
            userId: req.user.id
        },
        include: [
            {
                model: Spot,
                attributes: { exclude: ["description", "numReviews", "avgStarRating", "createdAt", "updatedAt", "OwnerId"] }
            }
        ]
    })
    res.json({ Bookings })
})


// Get all Bookings for a Spot based on the Spot's id
router.get("/:spotId", [restoreUser, authRequired], async (req, res, next) => {
    const spot = await Spot.findByPk(req.params.spotId);
    // send error if spot is not found
    if (!spot) {
        return next(notFound("Spot", 404))
    }
    // if you are NOT the owner of the spot
    if (spot.ownerId !== req.user.id) {
        const Bookings = await Booking.findAll({
            where: {
                spotId: req.params.spotId,
                userId: req.user.id
            },
            attributes: { exclude: ["id", "userId", "createdAt", "updatedAt"] }
        })
        res.json({ Bookings });
    }
    // if you ARE the owner of the spot
    else {
        const Bookings = await Booking.findAll({
            include: [{
                model: User,
            }],
            where: {
                spotId: req.params.spotId
            }
        })
        res.json({ Bookings });
    }
})


// Create a Booking from a Spot based on the Spot's id
router.post("/:spotId", [validateBooking, restoreUser, authRequired, authorizationNotRequiredBookings], async (req, res, next) => {
    const { startDate, endDate } = req.body;
    // error response: body validation errors
    if (endDate <= startDate) {
        return next(validationError("endDate cannot be on or before startDate", 400))
    }
    // error response: booking conflict
    const bookingCheck = await Booking.findAll({
        where: {
            spotId: req.params.spotId
        }
    })
    for (let booking of bookingCheck) {
        if (startDate >= booking.startDate && startDate <= booking.endDate && endDate <= booking.endDate) {
            return next(bookingExists({
                startDate: "Start date conflicts with an existing booking",
                endDate: "End date conflicts with an existing booking"
            }))
        }
        if (startDate <= booking.startDate && startDate <= booking.endDate && endDate >= booking.startDate) {
            return next(bookingExists({ endDate: "End date conflicts with an existing booking" }))
        }
        if (startDate >= booking.startDate && startDate <= booking.endDate && endDate >= booking.endDate) {
            return next(bookingExists({ startDate: "Start date conflicts with an existing booking" }))
        }
    }
    // send successful post response
    const newBooking = await Booking.create({
        spotId: req.params.spotId,
        userId: req.user.id,
        startDate: startDate,
        endDate: endDate
    })
    res.statusCode = 200;
    res.json(newBooking)

})


// Edit a Booking
router.put("/:bookingId", [restoreUser, authRequired, bookingAuthorization], async (req, res, next) => {
    const { startDate, endDate } = req.body;
    let compareCurrentDate = new Date();
    compareCurrentDate = compareCurrentDate.toISOString().split("T")[0]
    const updateBooking = await Booking.findByPk(req.params.bookingId);
    // error if booking doesn't exist
    if (!updateBooking) {
        return next(notFound("Booking", 404))
    }
    const bookingCheck = await Booking.findAll({
        where: {
            id: req.params.bookingId
        }
    })
    // body validation error: endDate cannot come before startDate
    if (endDate < startDate) {
        return next(validationError("endDate cannot come before startDate", 400))
    }
    // Can't edit a booking that's past the end date
    if (updateBooking.endDate < compareCurrentDate) {
        const error = new Error("Past bookings can't be modified")
        error.status = 403;
        error.statusCode = 403;
        return next(error);
    }
    // booking conflict
    for (let booking of bookingCheck) {
        if (startDate >= booking.startDate && startDate <= booking.endDate && endDate <= booking.endDate) {
            return next(bookingExists({
                startDate: "Start date conflicts with an existing booking",
                endDate: "End date conflicts with an existing booking"
            }))
        }
        if (startDate <= booking.startDate && startDate <= booking.endDate && endDate >= booking.startDate) {
            return next(bookingExists({ endDate: "End date conflicts with an existing booking" }))
        }
        if (startDate >= booking.startDate && startDate <= booking.endDate && endDate >= booking.endDate) {
            return next(bookingExists({ startDate: "Start date conflicts with an existing booking" }))
        }
    }
    // Update booking
    updateBooking.update({
        startDate: startDate,
        endDate: endDate,
        updatedAt: new Date()
    })
    // send the response for successful update
    res.status = 200;
    res.json({ updateBooking })
})


router.delete("/:bookingId", [restoreUser, authRequired, bookingAuthorization], async (req, res, next) => {
    const deleteBooking = await Booking.findByPk(req.params.bookingId);
    // error if booking doesn't exist
    if (!deleteBooking) {
        return next(notFound("Booking", 404))
    }
    // error if booking has already started
    let compareCurrentDate = new Date()
    compareCurrentDate = compareCurrentDate.toISOString().split("T")[0]
    if (deleteBooking.startDate <= compareCurrentDate) {
        const error = new Error("Booking that have been started can't be deleted");
        error.statusCode = 403;
        error.status = 403;
        return next(error);
    }
    // delete booking
    await Booking.destroy({
        where: {
            id: req.params.bookingId
        }
    })
    res.json({
        message: "Successfully delete",
        statusCode: 200
    })
})


module.exports = router;
