'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Images"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let reviewId1 = 1
    let reviewId3 = 3
    let reviewId5 = 5

    let spotId1 = 1
    let spotId2 = 2
    let spotId4 = 4

    if (process.env.NODE_ENV !== 'production') {
      const reviews = await queryInterface.sequelize.query("SELECT id FROM Reviews")
      const spots = await queryInterface.sequelize.query("SELECT id FROM Spots")

      reviewId1 = reviews[0][0].id
      reviewId3 = reviews[0][2].id
      reviewId5 = reviews[0][4].id

      spotId1 = spots[0][0].id
      spotId2 = spots[0][1].id
      spotId4 = spots[0][3].id
    }

    const validImages = [
      {
        reviewId: reviewId1,
        url: "https://www.thehousedesigners.com/images/plans/01/URD/bulk/6583/the-destination-front-rendering_m.webp"
      },
      {
        spotId: spotId1,
        url: "https://res.cloudinary.com/dtpgi0zck/image/upload/s--IJwO_Hss--/c_fill,h_580,w_860/v1/EducationHub/photos/ocean-waves.webp"
      },
      {
        spotId: spotId2,
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
      },
      {
        reviewId: reviewId3,
        url: "https://image.shutterstock.com/image-illustration/five-golden-stars-best-rating-260nw-657712999.jpg"
      },
      {
        spotId: spotId4,
        url: "https://www.worldatlas.com/r/w1200/upload/7a/f8/f7/lost-city-of-atlantis.jpg"
      },
      {
        reviewId: reviewId5,
        url: "https://www.pngkey.com/png/detail/4-47353_3-stars-3-.png"
      }
    ]

    await queryInterface.bulkInsert(options, validImages, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(options, {}, {})
  }
};
