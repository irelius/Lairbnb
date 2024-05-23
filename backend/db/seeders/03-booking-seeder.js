'use strict';

const { validBookings } = require('../../seederArrays/bookingsSeeder')

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Bookings"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(options, validBookings, {})
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete(options, {}, {})
    }
};
