'use strict';

const { User } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Users";
    return queryInterface.bulkInsert(options, [
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
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Users';
    return queryInterface.bulkDelete(options, {}, {});
  }
};
