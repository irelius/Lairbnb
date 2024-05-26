const express = require('express')
const router = express.Router();

const { User, Spot, Booking } = require('../../db/models');

const { validateBooking } = require('../../utils/validations')
const { restoreUser, authRequired } = require("../../utils/authentication.js");
const { bookingOwnerAuthorization, bookingAuthorization } = require("../../utils/authorization")
const { validationError, notFound, unexpectedError } = require('../../utils/helper.js');
const { check } = require('express-validator');


// helper function for a review that already exists, may not need since this only occurs once?
const bookingExists = () => {
    let error = new Error("Sorry, an overlapping booking exists for this hosting");
    error.status = 400;
    return error
}


// ------------------------------------------------------------------------------------------------------

// Get a booking by its id
router.get("/:bookingId", [restoreUser, authRequired], async (req, res, next) => {
    try {
        const booking = await Booking.findByPk(req.params.bookingId,
            {
                attributes: {
                    exclude: ["userId", "createdAt", "updatedAt"]
                }
            }
        )

        if (!booking) {
            return next(notFound("Booking", 404))
        } else {
            res.json({ booking })
        }
    } catch (e) {
        unexpectedError(res, e)
    }
})

// Get all of the Current User's Bookings
router.get("/current", [restoreUser, authRequired], async (req, res) => {
    try {

        const bookings = await Booking.findAll({
            where: {
                userId: req.user.id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: [
                {
                    model: Spot,
                    attributes: { exclude: ["createdAt", "updatedAt"] }
                }
            ]
        })
        res.json({ bookings })
    } catch (e) {
        unexpectedError(res, e)
    }
})


// Get all Bookings for a Spot based on the Spot's id
router.get("/spots/:spotId", [restoreUser, authRequired], async (req, res, next) => {
    try {
        let bookings;
        const spot = await Spot.findByPk(req.params.spotId);

        // send error if spot is not found
        if (!spot) {
            return next(notFound("Spot", 404))
        }

        // if you are NOT the owner of the spot
        if (spot.ownerId !== req.user.id) {
            bookings = await Booking.findAll({
                where: {
                    spotId: req.params.spotId,
                },
                attributes: { exclude: ["userId", "createdAt", "updatedAt"] }
            })
        }
        // if you ARE the owner of the spot
        else {
            bookings = await Booking.findAll({
                include: [{
                    model: User,
                }],
                where: {
                    spotId: req.params.spotId
                }
            })
        }
        res.json({ bookings });
    } catch (e) {
        unexpectedError(res, e)
    }
})


// Create a Booking from a Spot based on the Spot's id
router.post("/spots/:spotId", [validateBooking, restoreUser, authRequired, bookingOwnerAuthorization], async (req, res, next) => {
    try {
        const { startDate, endDate } = req.body;
        // error response: body validation errors
        if (endDate < startDate) {
            return next(validationError("End date cannot be before start date", 400))
        }

        // error response: booking conflict
        const bookingCheck = await Booking.findAll({
            where: {
                spotId: req.params.spotId
            }
        })

        for (let booking of bookingCheck) {
            let checkStart = booking.startDate.toISOString().slice(0, 10)
            let checkEnd = booking.endDate.toISOString().slice(0, 10)

            if (checkStart <= startDate && (checkEnd >= startDate || checkEnd >= endDate)) {
                return next(bookingExists())
            } else if (checkStart >= startDate && checkEnd <= endDate) {
                return next(bookingExists())
            } else if (checkStart <= endDate && checkEnd >= endDate) {
                return next(bookingExists())
            }
        }

        // send successful post response
        const newBooking = await Booking.create({
            spotId: req.params.spotId,
            userId: req.user.id,
            startDate: new Date(startDate),
            endDate: new Date(endDate)
        })

        res.json({ newBooking })
    } catch (e) {
        unexpectedError(res, e)
    }
})


// Edit a Booking
router.put("/:bookingId", [restoreUser, authRequired, bookingAuthorization], async (req, res, next) => {
    try {
        const { startDate, endDate } = req.body;
        const currentDate = new Date().toISOString().slice(0, 10)

        // error response: body validation errors
        if (endDate < startDate) {
            return next(validationError("End date cannot be before start date", 400))
        }

        // check if user is trying to update a booking to have the startDate be before current date
        if (startDate <= currentDate) {
            return next(validationError("You cannot update a booking to start before or on today's date", 400))
        }

        // error response: booking conflict
        const updateBooking = await Booking.findByPk(req.params.bookingId)
        const checkStart = updateBooking.startDate.toISOString().slice(0, 10)
        const checkEnd = updateBooking.endDate.toISOString().slice(0, 10)

        // Can't edit a booking that's already begun/ended
        if (checkEnd < currentDate || checkStart < currentDate) {
            const error = new Error("Bookings that have already begun or ended cannot be updated")
            error.status = 403;
            return next(error);
        }

        const spotId = updateBooking.spotId

        // error response: booking conflict
        const bookingCheck = await Booking.findAll({
            where: {
                spotId: spotId
            }
        })

        for (let booking of bookingCheck) {
            let checkStart = booking.startDate.toISOString().slice(0, 10)
            let checkEnd = booking.endDate.toISOString().slice(0, 10)

            if (checkStart <= startDate && (checkEnd >= startDate || checkEnd >= endDate)) {
                return next(bookingExists())
            } else if (checkStart >= startDate && checkEnd <= endDate) {
                return next(bookingExists())
            } else if (checkStart <= endDate && checkEnd >= endDate) {
                return next(bookingExists())
            }
        }

        // Update booking
        updateBooking.update({
            startDate: startDate,
            endDate: endDate,
            updatedAt: new Date()
        })

        res.json({ updateBooking })
    } catch (e) {
        unexpectedError(res, e)
    }
})


router.delete("/:bookingId", [restoreUser, authRequired, bookingAuthorization], async (req, res, next) => {
    try {
        const currentDate = new Date().toISOString().slice(0, 10)

        const deleteBooking = await Booking.findByPk(req.params.bookingId)

        // error if booking has already started
        if (deleteBooking.startDate <= currentDate) {
            const error = new Error("Bookings that have been started can't be deleted");
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
    } catch (e) {
        unexpectedError(res, e)
    }
})


module.exports = router;
