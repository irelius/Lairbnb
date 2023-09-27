'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Reviews"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options.tableName, [
      {
        userId: 1,
        spotId: 1,
        review: "Strictly speaking of quality, it is ok. But for the price, great value.",
        stars: 4,
      },
      {
        userId: 2,
        spotId: 1,
        review: "Test multiple reviews for one spot",
        stars: 5,
      },
      {
        userId: 1,
        spotId: 2,
        review: "crummy location. rude hosts.",
        stars: 1,
      },
      {
        userId: 2,
        spotId: 3,
        review: "Amazing sights and venue.",
        stars: 5,
      },
      {
        userId: 3,
        spotId: 4,
        review: "Lots of water",
        stars: 2,
      },
      {
        userId: 3,
        spotId: 5,
        review: "meh",
        stars: 3
      }
    ], { validate: true })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(options.tableName, {}, {})
  }
};
