const { Op } = require("sequelize");
const express = require("express");
const router = express.Router();

const { User, Spot, Image, Review } = require("../../db/models");

const { validateReviews } = require("../../utils/validations");
const { restoreUser, authRequired } = require("../../utils/authentication.js");
const { reviewAuthorization, reviewOwnerAuthorization } = require("../../utils/authorization");
const { notFound, unexpectedError } = require("../../utils/helper.js");

// ___________________________________________________________________________________________________________________

// Route append: "/reviews"

// Get all Reviews of the Current User
router.get("/current", [restoreUser, authRequired], async (req, res, next) => {
	try {
		const allReviews = await Review.findAll({
			where: {
				userId: req.user.id,
			},
			include: [
				{
					model: User,
					attributes: ["id", "firstName", "lastName"],
				},
				{
					model: Spot,
					attributes: { exclude: ["createdAt", "updatedAt"] },
				},

				{
					model: Image,
					attributes: ["id", "type", "typeId", "url"],
				},
			],
		});
		return res.json({ allReviews });
	} catch (e) {
		unexpectedError(res, e);
	}
});

// Get a Review by its ID number
router.get("/:reviewId", [restoreUser, authRequired], async (req, res, next) => {
	try {
		const review = await Review.findByPk(req.params.reviewId, {
			include: [
				{
					model: User,
					attributes: ["id", "firstName", "lastName"],
				},
				{
					model: Spot,
					attributes: { exclude: ["address", "city", "state", "country", "lat", "lng", "price", "numReviews"] },
				},
			],
		});

		// if review doesn't exist, return error for element not found
		if (!review) {
			return next(notFound("Review", 404));
		}

		res.json({ review });
	} catch (e) {
		unexpectedError(res, e);
	}
});

// Get all Reviews by a Spot's id
router.get("/spots/:spotId", async (req, res, next) => {
	try {
		const spot = await Spot.findByPk(req.params.spotId);

		let userId = req.user ? req.user.id : -1;
		// if (req.user) {
		//     userId = req.user.id
		// } else {
		//     userId = -1
		// }

		// error if spot doesn't exist
		if (!spot) {
			return next(notFound("Spot", 404));
		}

		// separate reviews made by current user or by other users
		let userReviews = [];
		if (req.user) {
			// Get user's reviews for spot
			userReviews = await Review.findAll({
				where: {
					userId,
					spotId: req.params.spotId,
				},
				include: [
					{
						model: User,
						attributes: ["id", "firstName", "lastName"],
					},
					{
						model: Spot,
						attributes: { exclude: ["description", "createdAt", "updatedAt", "OwnerId"] },
					},
					{
						model: Image,
						attributes: ["id", "type", "typeId", "url"],
					},
				],
			});
		}

		// find all reviews excluding current user's
		const otherReviews = await Review.findAll({
			where: {
				userId: {
					[Op.not]: userId,
				},
				spotId: req.params.spotId,
			},
			include: [
				{
					model: User,
					attributes: ["id", "firstName", "lastName"],
				},
				{
					model: Spot,
					attributes: { exclude: ["description", "createdAt", "updatedAt"] },
				},
				{
					model: Image,
					attributes: ["id", "type", "typeId", "url"],
				},
			],
		});

		return res.json({
			userReviews,
			otherReviews,
		});
	} catch (e) {
		unexpectedError(res, e);
	}
});

// Create a Review for a Spot based on the Spot's id
router.post(
	"/spots/:spotId",
	[validateReviews, restoreUser, authRequired, reviewOwnerAuthorization],
	async (req, res, next) => {
		try {
			const { review, stars } = req.body;

			const findSpot = await Spot.findByPk(req.params.spotId);
			// error if spot doesn't exist
			if (!findSpot) {
				return next(notFound("Spot", 404));
			}

			const currentReviews = await Review.findAll({
				where: {
					spotId: req.params.spotId,
					userId: req.user.id,
				},
			});
			// error if there is already a review
			if (currentReviews.length > 0) {
				const error = new Error("User already has a review for this spot");
				error.status = 403;
				return next(error);
			}

			const newReview = await Review.create({
				userId: req.user.id,
				spotId: req.params.spotId,
				review: review,
				stars: stars,
			});

			const createdAt = newReview.createdAt;
			const updatedAt = newReview.updatedAt;

			// const createdAt = new

			// Review this route to check if any images were attached. will need to create a new entry in the image table
			res.status(201).json(newReview);
		} catch (e) {
			unexpectedError(res, e);
		}
	}
);

// Edit a Review
// TODO: i don't like how i have the validation here, try to figure out how to implement validation on models and format the try-catch
router.put(
	"/:reviewId",
	[validateReviews, restoreUser, authRequired, reviewAuthorization, reviewOwnerAuthorization],
	async (req, res, next) => {
		try {
			const { review, stars } = req.body;
			const updateReview = await Review.findByPk(req.params.reviewId);

			if (!updateReview) {
				return next(notFound("Review", 404));
			}

			// update review
			updateReview.update({
				review: review,
				stars: stars,
			});
			updateReview.updatedAt = new Date();
			res.status(200).json(updateReview);
		} catch (e) {
			unexpectedError(res, e);
		}
	}
);

// Delete a Review
router.delete("/:reviewId", [restoreUser, authRequired, reviewAuthorization], async (req, res, next) => {
	try {
		// destroy review
		await Review.destroy({
			where: {
				id: req.params.reviewId,
			},
		});
		res.status(200).json({
			id: parseInt(req.params.reviewId),
			message: "Successfully deleted",
			statusCode: 200,
		});
	} catch (e) {
		unexpectedError(res, e);
	}
});

module.exports = router;
