'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Reviews"

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

        const validReviews = [
            {
                userId: userId1,
                spotId: spotId1,
                review: "Strictly speaking of quality, it is ok. But for the price, great value.",
                stars: 4,
            },
            {
                userId: userId1,
                spotId: spotId2,
                review: "crummy location. rude hosts.",
                stars: 1,
            },
            {
                userId: userId1,
                spotId: spotId4,
                review: "Lovely place for a date.",
                stars: 5
            },
            {
                userId: userId2,
                spotId: spotId1,
                review: "Test multiple reviews for one spot",
                stars: 5,
            },
            {
                userId: userId2,
                spotId: spotId2,
                review: "Delicious food, will come again.",
                stars: 4
            },
            {
                userId: userId2,
                spotId: spotId3,
                review: "Amazing sights and venue.",
                stars: 5,
            },

            {
                userId: userId2,
                spotId: spotId5,
                review: "Cozy atmosphere, highly recommended.",
                stars: 5
            },
            {
                userId: userId3,
                spotId: spotId1,
                review: "Not impressed, needs improvement.",
                stars: 2
            },
            {
                userId: userId3,
                spotId: spotId3,
                review: "Average food, but good service.",
                stars: 3
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
            },
        ]

        await queryInterface.bulkInsert(options, validReviews, {})
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete(options, {}, {})
    }
};
