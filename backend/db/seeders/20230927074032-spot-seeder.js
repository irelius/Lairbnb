'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Spots";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let ownerId1 = 1
    let ownerId2 = 2
    let ownerId3 = 3

    if (process.env.NODE_ENV !== 'production') {
      const users = await queryInterface.sequelize.query("SELECT id FROM Users")
      ownerId1 = users[0][0].id
      ownerId2 = users[0][1].id
      ownerId3 = users[0][2].id
    }

    await queryInterface.bulkInsert(options, [
      {
        ownerId: ownerId1,
        address: "1124 Oak Street",
        city: "Sunnydale",
        state: "California",
        country: "USA",
        lat: 40.7128,
        lng: -74.0060,
        name: "Luxury Retreat",
        description: "Escape to luxury in this multi-level modern masterpiece! Located in a serene suburban enclave, this high-end home redefines sophistication with its sleek lines and oblique rooftops.",
        price: 300.00,
        previewImg: "https://www.thehousedesigners.com/images/plans/01/URD/bulk/6583/the-destination-front-rendering_m.webp",
        numReviews: 0,
        avgStarRating: 0
      },
      {
        ownerId: ownerId2,
        address: "1690 Highrise Avenue",
        city: "Metropolis",
        state: "New York",
        country: "USA",
        lat: 34.0522,
        lng: -118.2437,
        name: "Skyline View Penthouse",
        description: "Exclusive penthouse with floor-to-ceiling windows offering stunning views of the city skyline. A glamorous choice for urban explorers.",
        price: 500.00,
        previewImg: "https://hips.hearstapps.com/hmg-prod/images/3799-flamingo-ave-siesta-key-print-005-14-flamingo-ave-sarasota-fl-4200x2799-300dpi-1675178841.jpg?crop=0.9992857142857143xw:1xh;center,top&resize=980:*",
        numReviews: 0,
        avgStarRating: 0
      },
      {
        ownerId: ownerId3,
        address: "789 Forest Lane",
        city: "Tranquilville",
        state: "Oregan",
        country: "USA",
        lat: 45.4215,
        lng: -122.6742,
        name: "Cozy Cottage Retreat",
        description: "Nestled in the heart of the woods, this charming cottage offers a serene escape. Perfect for nature lovers seeking tranquility.",
        price: 150.00,
        previewImg: "https://static01.nyt.com/images/2020/10/14/realestate/14IHH-Croatia-slide-VV0Q/14IHH-Croatia-slide-VV0Q-superJumbo.jpg?quality=75&auto=webp&disable=upscale",
        numReviews: 0,
        avgStarRating: 0
      },
      {
        ownerId: ownerId1,
        address: "101 Mirage Drive",
        city: "Sandstone",
        state: "Arizona",
        country: "USA",
        lat: 36.1699,
        lng: -115.1398,
        name: "Desert Retreat",
        description: "Experience the magic of the desert in this secluded oasis. Stargazing, sand dunes, and a peaceful atmosphere await.",
        price: 250.00,
        previewImg: "https://westernartandarchitecture.com/wp-content/uploads/2020/05/A_Sonoran_Villa_JJ_20-2.jpg",
        numReviews: 0,
        avgStarRating: 0
      },
      {
        ownerId: ownerId2,
        address: "112 Summit Trail",
        city: "Frostpeak",
        state: "Colorado",
        country: "USA",
        lat: 39.5501,
        lng: -105.7821,
        name: "Mountain View Cabin",
        description: "Rustic cabin perched on a mountainside, providing breathtaking views of snow-capped peaks. Great for hikers and snow lovers.",
        price: 200.00,
        previewImg: "https://freedesignfile.com/upload/2019/01/Snow-Mountain-Villa-Scenery-Stock-Photo.jpg",
        numReviews: 0,
        avgStarRating: 0
      },
      {
        ownerId: ownerId3,
        address: "893 Pine Haven",
        city: "Serenity Springs",
        state: "Washington",
        country: "USA",
        lat: 48.8566,
        lng: 2.3522,
        name: "Luxurious Log Cabin Retreat",
        description: "Escape to the tranquility of nature in this opulent log cabin tucked away in the serene woods. This sprawling retreat boasts the rustic charm of a classic log cabin.Immerse yourself in the cozy ambiance of the stone fireplace in the grand living area, or unwind in the private sauna after a day of exploring the surrounding wilderness. ",
        price: 350.00,
        previewImg: "https://www.christiesrealestate.com/blog/wp-content/uploads/2021/12/river-house-estate-telkwa-british-columbia-1.jpg",
        numReviews: 0,
        avgStarRating: 0
      },
      {
        ownerId: ownerId1,
        address: "1237 Willow Lane",
        city: "Harmony Heights",
        state: "Texas",
        country: "USA",
        lat: 42.3601,
        lng: -71.0589,
        name: "Contemporary Suburban Home",
        description: "Nestled in a quiet neighborhood, this sleek and spacious home offers a perfect blend of style and comfort. With multiple levels, the residence provides ample space for relaxation and entertainment. The sunlit living areas feature minimalist design, creating an inviting atmosphere for gatherings with friends and family.",
        price: 180.00,
        previewImg: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/9/16/0/IO_Tongue-and-Groove_Beech-Street_3.jpg.rend.hgtvcom.616.411.suffix/1568648112267.jpeg",
        numReviews: 0,
        avgStarRating: 0
      },
      {
        ownerId: ownerId2,
        address: "893 Meadow View",
        city: "Rural Retreat",
        state: "Ohio",
        country: "USA",
        lat: 39.7392,
        lng: -104.9903,
        name: "Countryside Farmhouse",
        description: "Quaint and rustic farmhouse surrounded by rolling fields and grazing animals. Ideal for a peaceful rural getaway.",
        price: 120.00,
        previewImg: "https://www.gannett-cdn.com/presto/2020/10/27/USAT/34e32c2d-d30c-4459-b3a0-792ba7c07c4d-Sallie_House.jpg",
        numReviews: 0,
        avgStarRating: 0
      },
      {
        ownerId: ownerId3,
        address: "541 Loft Street",
        city: "Cityscape",
        state: "Illinois",
        country: "USA",
        lat: 34.0522,
        lng: -118.2437,
        name: "Urban Chic Living",
        description: " Experience urban living at its finest in this architecturally inspired haven. Immerse yourself in the sleek, modern design featuring clean lines and abundant natural light. The open layout creates an inviting atmosphere, complemented by high ceilings that add a touch of grandeur.",
        price: 280.00,
        previewImg: "https://www.mydomaine.com/thmb/7Z1D20vZj7Eex5SIr3E_nJMWw8k=/2048x1536/filters:no_upscale():max_bytes(150000):strip_icc()/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg",
        numReviews: 0,
        avgStarRating: 0
      },
      {
        ownerId: ownerId1,
        address: "725 Concrete Avenue",
        city: "Modernville",
        state: "California",
        country: "USA",
        lat: 37.7749,
        lng: -122.4194,
        name: "Brutalist Home",
        description: "Designed for those who appreciate the bold and the beautiful, this residence boasts striking angles, raw textures, and a unique blend of form and function. The expansive windows invite the outside world in, providing an ever-changing backdrop to your stay.",
        price: 400.00,
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
