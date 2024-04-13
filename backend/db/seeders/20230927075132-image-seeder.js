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
        let reviewId2 = 2
        let reviewId3 = 3

        let spotId1 = 1
        let spotId2 = 2
        let spotId3 = 3
        let spotId4 = 4
        let spotId5 = 5
        let spotId6 = 6
        let spotId7 = 7
        let spotId8 = 8
        let spotId9 = 9
        let spotId10 = 10

        if (process.env.NODE_ENV !== 'production') {
            const reviews = await queryInterface.sequelize.query("SELECT id FROM Reviews")
            const spots = await queryInterface.sequelize.query("SELECT id FROM Spots")

            reviewId1 = reviews[0][0].id
            reviewId2 = reviews[0][1].id
            reviewId3 = reviews[0][2].id

            spotId1 = spots[0][0].id
            spotId2 = spots[0][1].id
            spotId3 = spots[0][2].id
            spotId4 = spots[0][3].id
            spotId5 = spots[0][4].id
            spotId6 = spots[0][5].id
            spotId7 = spots[0][6].id
            spotId8 = spots[0][7].id
            spotId9 = spots[0][8].id
            spotId10 = spots[0][9].id
        }

        const validImages = [
            {
                userId: 1,
                type: "spot",
                typeId: spotId1,
                url: "https://kb-lairbnb.s3.us-west-1.amazonaws.com/1.jpg"
            },
            {
                userId: 1,
                type: "spot",
                typeId: spotId2,
                url: "https://kb-lairbnb.s3.us-west-1.amazonaws.com/2.jpg",
            },
            {
                userId: 1,
                type: "spot",
                typeId: spotId3,
                url: "https://kb-lairbnb.s3.us-west-1.amazonaws.com/3.jpg",
            },
            {
                userId: 1,
                type: "spot",
                typeId: spotId4,
                url: "https://kb-lairbnb.s3.us-west-1.amazonaws.com/4.jpg",
            },
            {
                userId: 1,
                type: "spot",
                typeId: spotId5,
                url: "https://kb-lairbnb.s3.us-west-1.amazonaws.com/5.jpg",
            },
            {
                userId: 2,
                type: "spot",
                typeId: spotId6,
                url: "https://kb-lairbnb.s3.us-west-1.amazonaws.com/6.jpg",
            },
            {
                userId: 2,
                type: "spot",
                typeId: spotId7,
                url: "https://kb-lairbnb.s3.us-west-1.amazonaws.com/7.jpg",
            },
            {
                userId: 2,
                type: "spot",
                typeId: spotId8,
                url: "https://kb-lairbnb.s3.us-west-1.amazonaws.com/8.jpg",
            },
            {
                userId: 3,
                type: "spot",
                typeId: spotId9,
                url: "https://kb-lairbnb.s3.us-west-1.amazonaws.com/9.jpg",
            },
            {
                userId: 3,
                type: "spot",
                typeId: spotId10,
                url: "https://kb-lairbnb.s3.us-west-1.amazonaws.com/10.jpg",
            },
            {
                userId: 1,
                type: "review",
                typeId: reviewId1
            },
            {
                userId: 2,
                type: "review",
                typeId: reviewId2
            },
            {
                userId: 3,
                type: "review",
                typeId: reviewId3
            }
        ]



        await queryInterface.bulkInsert(options, validImages, {})
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete(options, {}, {})
    }
};
