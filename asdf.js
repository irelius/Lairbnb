"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA;
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const { User, Spot, Booking } = require("../models");

		const demoUsers = await User.findAll({
			where: {
				username: {
					[Sequelize.Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"],
				},
			},
		});
		const spots = await Spot.findAll();
		const getFutureDate = (daysFromNow) => {
			const currentDate = new Date();
			currentDate.setDate(currentDate.getDate() + daysFromNow);
			return currentDate;
		};

		await Booking.bulkCreate([
			{
				userId: demoUsers[0].id,
				spotId: spots[0].id,
				startDate: getFutureDate(10),
				endDate: getFutureDate(15),
			},
			{
				userId: demoUsers[1].id,
				spotId: spots[0].id,
				startDate: getFutureDate(20),
				endDate: getFutureDate(25),
			},
			{
				userId: demoUsers[2].id,
				spotId: spots[1].id,
				startDate: getFutureDate(5),
				endDate: getFutureDate(8),
			},
			{
				userId: demoUsers[1].id,
				spotId: spots[1].id,
				startDate: getFutureDate(12),
				endDate: getFutureDate(16),
			},
			{
				userId: demoUsers[0].id,
				spotId: spots[2].id,
				startDate: getFutureDate(30),
				endDate: getFutureDate(35),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete(options.tableName, null, {});
	},
};
