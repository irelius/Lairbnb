// backend/routes/api/users.js
const express = require('express')
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

const { validateLogin, validateSignup } = require('../../utils/validations')
const { setTokenCookie } = require('../../utils/authentication');
const { User } = require('../../db/models');

const router = express.Router();


// Log in
router.post('/login', validateLogin, async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.unscoped().findOne({
        where: {
            email: email
        }
    });

    if (!user) {
        const err = new Error("Login failed")
        err.status = 401;
        err.title = "Login failed"
        err.errors = { error: "Invalid email" }
        return next(err)
    } else if (!bcrypt.compareSync(password, user.hashedPassword.toString())) {
        const err = new Error('Login failed')
        err.status = 401;
        err.title = "Login failed"
        err.errors = { error: "Invalid password" }
        return next(err)
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
