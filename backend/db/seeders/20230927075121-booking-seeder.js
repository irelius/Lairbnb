'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Bookings"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options.tableName, [
      {
        spotId: 1,
        userId: 2,
        startDate: "2022-01-17",
        endDate: "2023-01-17"
      },
      {
        spotId: 2,
        userId: 1,
        startDate: "2022-06-23",
        endDate: "2023-06-23"
      },
      {
        spotId: 3,
        userId: 2,
        startDate: "2022-06-23",
        endDate: "2023-06-23"
      },
      {
        spotId: 4,
        userId: 3,
        startDate: "2055-05-15",
        endDate: "2055-12-35"
      },
      {
        spotId: 5,
        userId: 3,
        startDate: "2055-05-15",
        endDate: "2055-12-35"
      }
    ], { validate: true })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(options.tableName, {}, {})
  }
};
