// backend/routes/api/index.js
const router = require("express").Router()
const { restoreUser } = require("../../utils/auth.js");

// Connect restoreUser middleware to the API router
// If current user session is valid, set req.user to the user in the database
// If current user session is not valid, set req.user to null
router.use(restoreUser);

const usersRouter = require('./users');
const spotsRouter = require('./spots')
const imagesRouter = require('./images')
const reviewsRouter = require('./reviews')
const bookingsRouter = require("./bookings")
const mapsRouter = require("./maps")

router.use('/users', usersRouter);
router.use("/spots", spotsRouter);
router.use("/images", imagesRouter);
router.use("/reviews", reviewsRouter);
router.use("/bookings", bookingsRouter);
router.use("/maps", mapsRouter)

// Error middleware
router.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    message: error.message,
    statusCode: error.status,
    errors: error.errors
  })
})


router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
