'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Reviews"

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
        userId: userId1,
        spotId: spotId1,
        review: "Strictly speaking of quality, it is ok. But for the price, great value.",
        stars: 4,
      },
      {
        userId: userId2,
        spotId: spotId1,
        review: "Test multiple reviews for one spot",
        stars: 5,
      },
      {
        userId: userId1,
        spotId: spotId2,
        review: "crummy location. rude hosts.",
        stars: 1,
      },
      {
        userId: userId2,
        spotId: spotId3,
        review: "Amazing sights and venue.",
        stars: 5,
      },
      {
        userId: userId3,
        spotId: spotId4,
        review: "Lots of water",
        stars: 2,
      },
      {
        userId: userId3,
        spotId: spotId5,
        review: "meh",
        stars: 3
      }
    ], { validate: true })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(options, {}, {})
  }
};
