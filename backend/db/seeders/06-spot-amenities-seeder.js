"use strict";

const { validSpotAmenities } = require("./seederArrays/spotAmenitiesSeeder.js");

let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA; // define your schema in options object
}
options.tableName = "SpotAmenities";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(options, validSpotAmenities, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(options, {}, {});
	},
};
