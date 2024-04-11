const express = require('express')
const router = express.Router();
const { Op } = require("sequelize")

const { check } = require('express-validator');
const { User, Spot, Image, Review } = require('../../db/models');

const { handleValidationErrors, validateFilters, validateSpot } = require('../../utils/validations');
const { setTokenCookie, restoreUser, authRequired } = require("../../utils/authentication.js");
const { spotAuthorization } = require("../../utils/authorization")
const { notFound } = require('../../utils/helper.js')

// ___________________________________________________________________________________________________

// Get all Spots
router.get("/", validateFilters, async (req, res, next) => {
    let page = parseInt(req.query.page);
    let size = parseInt(req.query.size);

    if (isNaN(page) || page === 0) page = 1;
    if (isNaN(size)) size = 20

    let minLat = parseInt(req.query.minLat) || -90;
    let maxLat = parseInt(req.query.maxLat) || 90;
    let minLng = parseInt(req.query.minLng) || -180;
    let maxLng = parseInt(req.query.maxLng) || 180;
    let minPrice = parseInt(req.query.minPrice) || 0;
    let maxPrice = parseInt(req.query.maxPrice) || 999999999999999;

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
        offset: (size * (page - 1))
    })

    res.json({
        spots,
        page,
        size
    });

})



// Get Spots owned by Current User
router.get("/current", [restoreUser, authRequired], async (req, res) => {
    try {
        const spots = await Spot.findAll({
            where: {
                ownerId: req.user.id
            },
            attributes: { exclude: ["numReviews"] },
        })

        if (spots.length === 0) {
            return res.status(404).json({
                message: `No spots for User ${req.user.id}`,
            })
        }

        return res.json({ spots })
    } catch (e) {
        console.error("Error:", error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
});


// Get details of a Spot from an id
router.get("/:spotId", async (req, res, next) => {
    const spot = await Spot.findByPk(req.params.spotId, {
        include: [{
            model: Image,
            attributes: ["id", "type", "typeId", "url"]
        }, {
            model: User,
            as: "owner",
        }]
    })

    // if spot doesn't exist, return error for element not found
    if (!spot) {
        return next(notFound("Spot", 404))
    }

    return res.json(spot)
    // Following code should be moved to a review api route. Recalculation of ratings should be done whenever a new review is submitted
    // get all reviews to find out how many reviews a spot has
    let starTotal = 0;
    let starCount = 0;
    const allReviews = await Review.findAll({
        where: {
            spotId: req.params.spotId
        }
    })
    spot.numReviews = allReviews.length;
    // get all star ratings to calculate average star rating a spot has
    allReviews.forEach(el => {
        starTotal += el.stars;
        starCount++
    })
    spot.avgStarRating = (starTotal / starCount)
})


// Create a Spot
router.post("/", [validateSpot, restoreUser, authRequired], async (req, res, next) => {
    const { address, city, state, country, lat, lng, name, description, price, image } = req.body;
    const newSpot = await Spot.create({
        ownerId: req.user.id,
        address: address,
        city: city,
        state: state,
        country: country,
        lat: lat,
        lng: lng,
        name: name,
        description: description,
        price: price,
        previewImg: image
    })
    res.status(201).json(newSpot);
})


// Edit a Spot
router.put("/:spotId", [validateSpot, restoreUser, authRequired, spotAuthorization], (async (req, res, next) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;
    const updateSpot = await Spot.findByPk(req.params.spotId)
    // update spot
    updateSpot.update({
        address: address,
        city: city,
        state: state,
        country: country,
        lat: lat,
        lng: lng,
        name: name,
        description: description,
        price: price,
    })
    // update and send updated spot
    updateSpot.updatedAt = new Date()
    res.json(updateSpot)
}))


// Delete a Spot
router.delete("/:spotId", [restoreUser, authRequired, spotAuthorization], async (req, res, next) => {
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
})


module.exports = router;
