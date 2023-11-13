'use strict';

const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Users";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const validUsers = [
      {
        email: 'demo@aa.io',
        firstName: "Demo",
        lastName: "User",
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@aa.io',
        firstName: "User",
        lastName: "One",
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user2@aa.io',
        firstName: "User",
        lastName: "Two",
        hashedPassword: bcrypt.hashSync('password')
      }
    ]

    await queryInterface.bulkInsert(options, validUsers, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(options, {}, {});
  }
};
