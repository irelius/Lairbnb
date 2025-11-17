'use strict';

const { validUsers } = require("./seederArrays/usersSeeder")

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Users";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(options, validUsers, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete(options, {}, {});
    }
};
