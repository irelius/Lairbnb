'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Bookings"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query("SELECT id FROM Users")
    const spots = await queryInterface.sequelize.query("SELECT id FROM Spots")

    const userId1 = users[0][0].id
    const userId2 = users[0][1].id
    const userId3 = users[0][2].id

    const spotId1 = spots[0][0].id
    const spotId2 = spots[0][1].id
    const spotId3 = spots[0][2].id
    const spotId4 = spots[0][3].id
    const spotId5 = spots[0][4].id

    await queryInterface.bulkInsert(options, [
      {
        spotId: spotId1,
        userId: userId2,
        startDate: "2022-01-17",
        endDate: "2023-01-17"
      },
      {
        spotId: spotId2,
        userId: userId1,
        startDate: "2022-06-23",
        endDate: "2023-06-23"
      },
      {
        spotId: spotId3,
        userId: userId2,
        startDate: "2022-06-23",
        endDate: "2023-06-23"
      },
      {
        spotId: spotId4,
        userId: userId3,
        startDate: "2055-05-15",
        endDate: "2055-12-35"
      },
      {
        spotId: spotId5,
        userId: userId3,
        startDate: "2055-05-15",
        endDate: "2055-12-35"
      }
    ], { validate: true })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(options, {}, {})
  }
};
