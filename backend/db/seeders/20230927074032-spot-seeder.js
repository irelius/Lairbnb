'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Spots";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query("SELECT id FROM Users")

    const ownerId1 = users[0][0].id
    const ownerId2 = users[0][1].id
    const ownerId3 = users[0][2].id

    await queryInterface.bulkInsert(options, [
      {
        ownerId: ownerId1,
        address: "111 First Lane",
        city: "First City",
        state: "First State",
        country: "First Country",
        lat: 11.11,
        lng: 11.11,
        name: "First Place",
        description: "First place to ever exist",
        price: 111.11,
        previewImg: "https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533282066069-145RDAGJ0I93OL2TLZLM/Ayada+Maldives+villas+OCEAN+VILLA+%283%29.jpg?format=2500w",
        numReviews: 0,
        avgStarRating: 0
      },
      {
        ownerId: ownerId2,
        address: "222 Second Lane",
        city: "Second City",
        state: "Second State",
        country: "Second Country",
        lat: 22.22,
        lng: 22.22,
        name: "Second Place",
        description: "Second place to ever exist",
        price: 222.22,
        previewImg: "https://hips.hearstapps.com/hmg-prod/images/3799-flamingo-ave-siesta-key-print-005-14-flamingo-ave-sarasota-fl-4200x2799-300dpi-1675178841.jpg?crop=0.9992857142857143xw:1xh;center,top&resize=980:*",
        numReviews: 0,
        avgStarRating: 0
      },
      {
        ownerId: ownerId3,
        address: "333 Third Lane",
        city: "Third City",
        state: "Third State",
        country: "Third Country",
        lat: 33.33,
        lng: 33.33,
        name: "Third Place",
        description: "Third place to ever exist",
        price: 333.33,
        previewImg: "https://static01.nyt.com/images/2020/10/14/realestate/14IHH-Croatia-slide-VV0Q/14IHH-Croatia-slide-VV0Q-superJumbo.jpg?quality=75&auto=webp&disable=upscale",
        numReviews: 0,
        avgStarRating: 0
      },
      {
        ownerId: ownerId1,
        address: "444 Fourth Lane",
        city: "Fourth City",
        state: "Fourth State",
        country: "Fourth Country",
        lat: 44.44,
        lng: 44.44,
        name: "Fourth Place",
        description: "Fourth place to ever exist",
        price: 444.44,
        previewImg: "https://westernartandarchitecture.com/wp-content/uploads/2020/05/A_Sonoran_Villa_JJ_20-2.jpg",
        numReviews: 0,
        avgStarRating: 0
      },
      {
        ownerId: ownerId2,
        address: "555 Fifth Lane",
        city: "Fifth City",
        state: "Fifth State",
        country: "Fifth Country",
        lat: 55.55,
        lng: 55.55,
        name: "Fifth Place",
        description: "Fifth place to ever exist",
        price: 555.55,
        previewImg: "https://freedesignfile.com/upload/2019/01/Snow-Mountain-Villa-Scenery-Stock-Photo.jpg",
        numReviews: 0,
        avgStarRating: 0
      },
      {
        ownerId: ownerId3,
        address: "666 Sixth Lane",
        city: "Sixth City",
        state: "Sixth State",
        country: "Sixth Country",
        lat: 66.66,
        lng: 66.66,
        name: "Sixth Place",
        description: "Sixth place to ever exist",
        price: 666.66,
        previewImg: "https://www.christiesrealestate.com/blog/wp-content/uploads/2021/12/river-house-estate-telkwa-british-columbia-1.jpg",
        numReviews: 0,
        avgStarRating: 0
      },
      {
        ownerId: ownerId1,
        address: "777 Seventh Lane",
        city: "Seventh City",
        state: "Seventh State",
        country: "Seventh Country",
        lat: 77.77,
        lng: 77.77,
        name: "Seventh Place",
        description: "Seventh place to ever exist",
        price: 777.77,
        previewImg: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/9/16/0/IO_Tongue-and-Groove_Beech-Street_3.jpg.rend.hgtvcom.616.411.suffix/1568648112267.jpeg",
        numReviews: 0,
        avgStarRating: 0
      },
      {
        ownerId: ownerId2,
        address: "888 Eigth Lane",
        city: "Eigth City",
        state: "Eigth State",
        country: "Eigth Country",
        lat: 88.88,
        lng: 88.88,
        name: "Eigth Place",
        description: "Eigth place to ever exist",
        price: 888.88,
        previewImg: "https://www.gannett-cdn.com/presto/2020/10/27/USAT/34e32c2d-d30c-4459-b3a0-792ba7c07c4d-Sallie_House.jpg",
        numReviews: 0,
        avgStarRating: 0
      },
      {
        ownerId: ownerId3,
        address: "999 Ninth Lane",
        city: "Ninth City",
        state: "Ninth State",
        country: "Ninth Country",
        lat: 9.9,
        lng: 99.99,
        name: "Ninth Place",
        description: "Ninth place to ever exist",
        price: 999.99,
        previewImg: "https://www.mydomaine.com/thmb/7Z1D20vZj7Eex5SIr3E_nJMWw8k=/2048x1536/filters:no_upscale():max_bytes(150000):strip_icc()/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg",
        numReviews: 0,
        avgStarRating: 0
      },
      {
        ownerId: ownerId1,
        address: "1000 Tenth Lane",
        city: "Tenth City",
        state: "Tenth State",
        country: "Tenth Country",
        lat: 10.10,
        lng: 10.10,
        name: "Tenth Place",
        description: "Tenth place to ever exist",
        price: 100.10,
        previewImg: "https://www.designcurial.com/Uploads/NewsArticle/4809815/main.jpg",
        numReviews: 0,
        avgStarRating: 0
      }
    ], { validate: true })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(options, {}, {})
  }
};
