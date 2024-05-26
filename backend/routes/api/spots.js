const express = require('express')
const router = express.Router();
const { Op, Sequelize } = require("sequelize")

const { User, Spot, Image, Review, Booking } = require('../../db/models');

const { validateFilters, validateSpot } = require('../../utils/validations');
const { restoreUser, authRequired } = require("../../utils/authentication.js");
const { spotAuthorization } = require("../../utils/authorization")
const { notFound, unexpectedError } = require('../../utils/helper.js')

// ___________________________________________________________________________________________________

// Get all Spots
router.get("/", validateFilters, async (req, res, next) => {
    try {
        let page = parseInt(req.query.page);
        let size = parseInt(req.query.size);

        if (isNaN(page) || page === 0) page = 1;
        if (isNaN(size)) size = 20

        let minLat = parseFloat(req.query.minLat) || -90;
        let maxLat = parseFloat(req.query.maxLat) || 90;
        let minLng = parseFloat(req.query.minLng) || -180;
        let maxLng = parseFloat(req.query.maxLng) || 180;
        let minPrice = parseFloat(req.query.minPrice) || 0;
        let maxPrice = parseFloat(req.query.maxPrice) || 999999999999999;

        if (page > 10) {
            page = 10
        }
        if (size > 20) {
            size = 20
        }

        const spots = await Spot.findAll({
            where: {
                lat: {
                    [Op.between]: [minLat, maxLat]
                },
                lng: {
                    [Op.between]: [minLng, maxLng]
                },
                price: {
                    [Op.between]: [minPrice, maxPrice]
                }
            },
            limit: size,
            offset: (size * (page - 1)),
            // should i include bookings in the query?
            include: [
                {
                    model: Image,
                    where: {
                        type: "spot"
                    }
                }
            ]
        })

        res.json({
            spots,
            page,
            size
        });
    } catch (e) {
        unexpectedError(res, e)
    }

})



// Get Spots owned by Current User
router.get("/current", [restoreUser, authRequired], async (req, res) => {
    try {
        const spots = await Spot.findAll({
            where: {
                ownerId: req.user.id
            },
            include: [
                {
                    model: Image,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                },
                {
                    model: Booking,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                }
            ]
        })

        if (spots.length === 0) {
            return res.status(404).json({
                message: `No spots for User ${req.user.id} was found`,
            })
        }

        return res.json({ spots })
    } catch (e) {
        unexpectedError(res, e)
    }
});


// Get details of a Spot from an id
router.get("/:spotId", async (req, res, next) => {
    try {
        const spot = await Spot.findByPk(req.params.spotId, {
            include: [{
                model: Image,
                attributes: ["id", "type", "typeId", "url"]
            }, {
                model: User,
                as: "owner",
            }, {
                model: Booking,
                attributes: {
                    exclude: ['userId', 'createdAt', 'updatedAt']
                }
            }]
        })

        // if spot doesn't exist, return error for element not found
        if (!spot) {
            return next(notFound("Spot", 404))
        }

        // get review information for spot with aggregation methods
        const spotInfo = await Review.findAll({
            where: {
                spotId: req.params.spotId
            },
            attributes: [
                [Sequelize.fn("AVG", Sequelize.col("stars")), "averageRating"],
                [Sequelize.fn("COUNT", Sequelize.col("id")), "reviewCount"]
            ],
        })

        const spotInfoParsed = spotInfo[0].toJSON()
        const averageRating = spotInfoParsed.averageRating || 0
        const totalReview = spotInfoParsed.reviewCount

        return res.json({
            spot,
            averageRating: averageRating.toFixed(2),
            reviewCount: totalReview
        })
    } catch (e) {
        unexpectedError(res, e)
    }
})


// Create a Spot
router.post("/", [restoreUser, authRequired, validateSpot], async (req, res, next) => {
    try {
        const { address, city, state, country, lat, lng, name, description, price } = req.body;
        const newSpot = await Spot.create({
            ownerId: req.user.id,
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description,
            price
        })
        res.status(201).json({ newSpot });
    } catch (e) {
        unexpectedError(res, e)
    }
})


// Edit a Spot
router.put("/:spotId", [restoreUser, authRequired, spotAuthorization, validateSpot], (async (req, res, next) => {
    try {
        const { address, city, state, country, lat, lng, name, description } = req.body;
        const updateSpot = await Spot.findByPk(req.params.spotId)

        // update spot
        updateSpot.update({
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description
        })
        // update and send updated spot
        updateSpot.updatedAt = new Date()
        res.json({ updateSpot })
    } catch (e) {
        unexpectedError(res, e)
    }
}))


// Delete a Spot
router.delete("/:spotId", [restoreUser, authRequired, spotAuthorization], async (req, res, next) => {
    try {
        // destroy spot
        await Spot.destroy({
            where: {
                id: req.params.spotId
            }
        })

        // send message
        res.status(200).json({
            id: parseInt(req.params.spotId),
            message: "Successfully deleted",
            statusCode: 200
        })
    } catch (e) {
        unexpectedError(res, e)
    }
})


module.exports = router;
