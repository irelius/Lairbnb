'use strict';

const { validSpots } = require('../../seederArrays/spotsSeeder')

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA; // define your schema in options object
}
options.tableName = 'Spots'

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(options, validSpots, {})
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete(options, {}, {})
    }
};
