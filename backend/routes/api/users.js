// backend/routes/api/users.js
const express = require('express')
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validations');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const validateLogin = [
    check('email')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a valid email.'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password.'),
    handleValidationErrors
];

const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('firstName')
        .exists({checkFalsy: true})
        .withMessage("Please provie a first name."),
    check('lastName')
        .exists({checkFalsy: true})
        .withMessage("Please provide a last name."),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];


// Log in
router.post('/login', validateLogin, async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.unscoped().findOne({
        where: {
            email: email
        }
    });

    if (!user || !bcrypt.compareSync(password, user.hashedPassword.toString())) {
        const err = new Error('Login failed');
        err.status = 401;
        err.title = 'Login failed';
        err.errors = { email: 'The provided email was invalid.' };
        return next(err);
    }

    const safeUser = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
    };

    await setTokenCookie(res, safeUser);

    return res.json({
        user: safeUser
    });
});


// Log out
router.delete('/logout', (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'Successfully logged out' });
});

// Sign up
router.post('/signup', validateSignup, async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({ email, firstName, lastName, hashedPassword });

    const safeUser = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
    };

    await setTokenCookie(res, safeUser);

    return res.json({
        user: safeUser
    });
});


// Restore session user
router.get('/restore', (req, res) => {
    const { user } = req;
    if (user) {
        const safeUser = {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
        };
        return res.json({
            user: safeUser
        });
    } else return res.json({ user: null });
});

module.exports = router;
