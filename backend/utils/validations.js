// backend/utils/validation.js
const { validationResult, check } = require('express-validator');

// middleware for formatting errors from express-validator middleware
// (to customize, see express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        const errors = {};
        validationErrors.array().forEach(error => errors[error.path] = error.msg);
        const err = Error("Bad request.");
        err.errors = errors;
        err.status = 400;
        err.title = "Bad request.";
        next(err);
    }
    next();
};


// Test validation

const validateTest = [
    check('body')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("Please provide a body")
        .custom((body, test) => {
            if (body < test) {
                throw new Error("body is less than test")
            } else if (body > test) {
                throw new Error("body is greater than test")
            } else {
                throw new Error("body is equal to test")
            }
        }),
    handleValidationErrors
]

// ----------------------------------- User Validation Methods -----------------------------------
const validateLogin = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.')
        .notEmpty()
        .withMessage('Please provide an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a password.'),
    handleValidationErrors
];

const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide an email.')
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('firstName')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("Please provie a first name."),
    check('lastName')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("Please provide a last name."),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];


// ----------------------------------- Spot Validation Methods -----------------------------------
const validateSpot = [
    check("address")
        .notEmpty()
        .withMessage("Street address is required")
        .isLength({ max: 60 })
        .withMessage("Street address should not exceed 60 characters."),
    check("city")
        .notEmpty()
        .withMessage("City is required")
        .isLength({ max: 60 })
        .withMessage("City should not exceed 60 characters."),
    check("state")
        .notEmpty()
        .withMessage("State is required")
        .isLength({ max: 20 })
        .withMessage("City should not exceed 20 characters."),
    check("country")
        .notEmpty()
        .withMessage("Country is required")
        .isLength({ max: 30 })
        .withMessage("City should not exceed 30 characters."),
    check("lat")
        .notEmpty()
        .isDecimal()
        .withMessage("Latitude is not valid")
        .custom(lat => {
            if (lat < -90 || lat > 90) {
                throw new Error("Latitude must be between -90 and 90")
            }
            return true;
        }),
    check("lng")
        .notEmpty()
        .isDecimal()
        .withMessage("Longitude is not valid")
        .custom(lng => {
            if (lng < -180 || lng > 180) {
                throw new Error("Longitude must be between -180 and 180")
            }
            return true;
        }),
    check("name")
        .notEmpty()
        .withMessage("Hosting name is required")
        .isLength({ max: 60 })
        .withMessage("Name must be less than 60 characters"),
    check("description")
        .notEmpty()
        .withMessage("Description is required"),
    check("price")
        .isDecimal()
        .notEmpty()
        .withMessage("Price per day is required")
        .custom(price => {
            if (price <= 0) {
                throw new Error("Capitalism requires you to charge your customers more than 0 dollars.")
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
                throw new Error("Minimum latitude must not be below -90")
            }
            return true;
        }),
    check("maxLat")
        .optional()
        .isDecimal()
        .withMessage("Maximum latitude is not valid")
        .custom(maxLat => {
            if (maxLat > 90) {
                throw new Error("Maximum latitude must not be above 90")
            }
            return true;
        }),
    check("minLng")
        .optional()
        .isDecimal()
        .withMessage("Minimum longitude is not valid")
        .custom(minLng => {
            if (minLng < -180) {
                throw new Error("Minimum longitude must not be below -180")
            }
            return true;
        }),
    check("maxLng")
        .optional()
        .isDecimal()
        .withMessage("Maximum longitude is not valid")
        .custom(maxLng => {
            if (maxLng > 180) {
                throw new Error("Maximum longitude must not be above 180")
            }
            return true;
        }),
    check("minPrice")
        .optional()
        .isDecimal()
        .withMessage("Minimum price must be greater than or equal to 0")
        .custom(minPrice => {
            if (minPrice < 0) {
                throw new Error("Minimum price filter must be greater than or equal to 0")
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
                throw new Error("Maximum price filter must be greater than or equal to 0")
            }
            return true;
        })
    ,
    handleValidationErrors
]


// ----------------------------------- Booking Validation Methods -----------------------------------
const validateBooking = [
    check("startDate")
        .exists({ checkFalsy: true })
        .isString()
        .notEmpty()
        .withMessage("Start date is required"),
    check("endDate")
        .exists({ checkFalsy: true })
        .isString()
        .notEmpty()
        .withMessage("End date is required"),
    handleValidationErrors
]


// ----------------------------------- Review Validation Methods -----------------------------------
const validateReviews = [
    check("review")
        .notEmpty()
        .withMessage("Please leave a review"),
    check("stars")
        .notEmpty()
        .withMessage("Please leave a rating")
        .isInt({ min: 1, max: 5 })
        .withMessage("Please give this location a rating from 1 to 5"),
    handleValidationErrors
]

// ----------------------------------- Image Validation Methods -----------------------------------
const validateURL = [
    check("url")
        .isURL()
        .withMessage("URL is not valid"),
    handleValidationErrors
]


module.exports = {
    handleValidationErrors,
    validateLogin,
    validateSignup,
    validateSpot,
    validateFilters,
    validateBooking,
    validateReviews,
    validateURL,
    validateTest
};
