'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Bookings"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let userId1 = 1
    let userId2 = 2
    let userId3 = 3

    let spotId1 = 1
    let spotId2 = 2
    let spotId3 = 3
    let spotId4 = 4
    let spotId5 = 5

    if (process.env.NODE_ENV !== 'production') {
      const users = await queryInterface.sequelize.query("SELECT id FROM Users")
      const spots = await queryInterface.sequelize.query("SELECT id FROM Spots")

      userId1 = users[0][0].id
      userId2 = users[0][1].id
      userId3 = users[0][2].id

      spotId1 = spots[0][0].id
      spotId2 = spots[0][1].id
      spotId3 = spots[0][2].id
      spotId4 = spots[0][3].id
      spotId5 = spots[0][4].id
    }

    const validBookings = [
      {
        spotId: spotId1,
        userId: userId2,
        startDate: new Date("2022-01-17"),
        endDate: new Date("2023-01-17")
      },
      {
        spotId: spotId2,
        userId: userId1,
        startDate: new Date("2022-06-23"),
        endDate: new Date("2023-06-23")
      },
      {
        spotId: spotId3,
        userId: userId2,
        startDate: new Date("2022-06-23"),
        endDate: new Date("2023-06-23")
      },
      {
        spotId: spotId4,
        userId: userId3,
        startDate: new Date("2055-05-15"),
        endDate: new Date("2055-12-35")
      },
      {
        spotId: spotId5,
        userId: userId3,
        startDate: new Date("2055-05-15"),
        endDate: new Date("2055-12-35")
      }
    ]

    await queryInterface.bulkInsert(options, validBookings, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(options, {}, {})
  }
};
