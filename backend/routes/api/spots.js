const express = require('express')
const router = express.Router();
const { Op } = require("sequelize")

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validations');


const { setTokenCookie, requireAuth, restoreUser, authenticationRequired, authorizationRequiredSpots } = require('../../utils/auth');
const { User, Spot, Image, Review } = require('../../db/models');

// helper function for a particular element not found
const notFound = (el, code) => {
    let error = new Error(`${el} couldn't be found`);
    error.status = code;
    error.statusCode = code;
    return error
}


const validateSpot = [
    check("address")
        .notEmpty()
        .withMessage("Street address is required"),
    check("city")
        .notEmpty()
        .withMessage("City is required"),
    check("state")
        .notEmpty()
        .withMessage("State is required"),
    check("country")
        .notEmpty()
        .withMessage("Country is required"),
    check("lat")
        .notEmpty()
        .isDecimal()
        .withMessage("Latitude is not valid")
        .custom(lat => {
            if (lat < -90 || lat > 90) {
                throw new Error("Latitude is not valid")
            }
            return true;
        }),
    check("lng")
        .notEmpty()
        .isDecimal()
        .withMessage("Longitude is not valid")
        .custom(lng => {
            if (lng < -180 || lng > 180) {
                throw new Error("Longitude is not valid")
            }
            return true;
        }),
    check("name")
        .notEmpty()
        .isLength({ max: 50 })
        .withMessage("Name must be less than 50 characters"),
    check("description")
        .notEmpty()
        .withMessage("Description is required"),
    check("price")
        .notEmpty()
        .isDecimal()
        .withMessage("Price per day is required")
        .custom(price => {
            if (price < 0) {
                throw new Error("Price per day is required")
            }
            return true;
        }),
    handleValidationErrors
]


const validateFilters = [
    check("page")
        .optional()
        .isInt({ min: 0 })
        .withMessage("Page must be greater than or equal to 0"),
    check("size")
        .optional()
        .isInt({ min: 0 })
        .withMessage("Size must be greater than or equal to 0"),
    check("minLat")
        .optional()
        .isDecimal()
        .withMessage("Minimum latitude is not valid")
        .custom(minLat => {
            if (minLat < -90) {
                throw new Error("Minimum latitude is not valid")
            }
            return true;
        }),
    check("maxLat")
        .optional()
        .isDecimal()
        .withMessage("Maximum latitude is not valid")
        .custom(maxLat => {
            if (maxLat > 90) {
                throw new Error("Maximum latitude is not valid")
            }
            return true;
        }),
    check("minLng")
        .optional()
        .isDecimal()
        .withMessage("Minimum longitude is not valid")
        .custom(minLng => {
            if (minLng < -180) {
                throw new Error("Minimum longitude is invalid")
            }
            return true;
        }),
    check("maxLng")
        .optional()
        .isDecimal()
        .withMessage("Maximum longitude is not valid")
        .custom(maxLng => {
            if (maxLng > 180) {
                throw new Error("Maximum longitude is invalid")
            }
            return true;
        }),
    check("minPrice")
        .optional()
        .isDecimal()
        .withMessage("Minimum price must be greater than or equal to 0")
        .custom(minPrice => {
            if (minPrice < 0) {
                throw new Error("Minimum price must be greater than or equal to 0")
            }
            return true;
        })
    ,
    check("maxPrice")
        .optional()
        .isDecimal()
        .withMessage("Maximum price must be greater than or equal to 0")
        .custom(maxPrice => {
            if (maxPrice < 0) {
                throw new Error("Maximum price must be greater than or equal to 0")
            }
            return true;
        })
    ,
    handleValidationErrors
]

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

    const Spots = await Spot.findAll({
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
        Spots,
        page,
        size
    });

})



// Get Spots owned by Current User
router.get("/current", [restoreUser, authenticationRequired], async (req, res) => {
    try {
        const Spots = await Spot.findAll({
            where: {
                ownerId: req.user.id,
            },
            attributes: { exclude: ["numReviews"] },
        });

        if (Spots.length === 0) {
            return res.status(404).json({
                message: `No spots for User ${req.user.id}`,
            });
        }

        return res.json({
            Spots
        });
    } catch (error) {
        // Handle any unexpected errors here
        console.error("Error:", error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
}
);



// Get details of a Spot from an id
router.get("/:spotId", async (req, res, next) => {
    const spot = await Spot.findByPk(req.params.spotId, {
        include: [{
            model: Image,
            attributes: ["id", ["reviewId", "imageableId"], ["spotId", "imageableId"], "url"]
        },
        {
            model: User,
            as: "Owner",
            attributes: ["id", "firstName", "lastName"]
        }]
    });
    // error if spot doesn't exist
    if (!spot) {
        return next(notFound("Spot", 404))
    }
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
    // successfully send spot
    res.json(spot)
})


// Create a Spot
router.post("/",
    [validateSpot, restoreUser, authenticationRequired], async (req, res, next) => {
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
router.put("/:spotId", [validateSpot, restoreUser, authenticationRequired, authorizationRequiredSpots], (async (req, res, next) => {
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
})
)


// Delete a Spot
router.delete("/:spotId", [restoreUser, authenticationRequired, authorizationRequiredSpots], async (req, res, next) => {
    // destroy spot
    await Spot.destroy({
        where: {
            id: req.params.spotId
        }
    })
    // send message
    res.status(200).json({
        message: "Successfully deleted",
        statusCode: 200
    })
})


module.exports = router;
