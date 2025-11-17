'use strict';

const { validReviews } = require("./seederArrays/reviewsSeeder")

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Reviews"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(options, validReviews, {})
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete(options, {}, {})
    }
};
