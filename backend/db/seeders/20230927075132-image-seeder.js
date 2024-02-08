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
            reviewId3 = reviews[0][2].id
            reviewId5 = reviews[0][4].id

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
                type: "spot",
                typeId: spotId1,
                url: "https://www.thehousedesigners.com/images/plans/01/URD/bulk/6583/the-destination-front-rendering_m.webp"
            },
            {
                type: "spot",
                typeId: spotId2,
                url: "https://hips.hearstapps.com/hmg-prod/images/3799-flamingo-ave-siesta-key-print-005-14-flamingo-ave-sarasota-fl-4200x2799-300dpi-1675178841.jpg?crop=0.9992857142857143xw:1xh;center,top&resize=980:*"
            },
            {
                type: "spot",
                typeId: spotId3,
                url: "https://static01.nyt.com/images/2020/10/14/realestate/14IHH-Croatia-slide-VV0Q/14IHH-Croatia-slide-VV0Q-superJumbo.jpg?quality=75&auto=webp&disable=upscale"
            },
            {
                type: "spot",
                typeId: spotId4,
                url: "https://westernartandarchitecture.com/wp-content/uploads/2020/05/A_Sonoran_Villa_JJ_20-2.jpg"
            },
            {
                type: "spot",
                typeId: spotId5,
                url: "https://freedesignfile.com/upload/2019/01/Snow-Mountain-Villa-Scenery-Stock-Photo.jpg",
            },
            {
                type: "spot",
                typeId: spotId6,
                url: "https://www.christiesrealestate.com/blog/wp-content/uploads/2021/12/river-house-estate-telkwa-british-columbia-1.jpg",
            },
            {
                type: "spot",
                typeId: spotId7,
                url: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/9/16/0/IO_Tongue-and-Groove_Beech-Street_3.jpg.rend.hgtvcom.616.411.suffix/1568648112267.jpeg",
            },
            {
                type: "spot",
                typeId: spotId8,
                url: "https://www.gannett-cdn.com/presto/2020/10/27/USAT/34e32c2d-d30c-4459-b3a0-792ba7c07c4d-Sallie_House.jpg",
            },
            {
                type: "spot",
                typeId: spotId9,
                url: "https://www.mydomaine.com/thmb/7Z1D20vZj7Eex5SIr3E_nJMWw8k=/2048x1536/filters:no_upscale():max_bytes(150000):strip_icc()/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg",
            },
            {
                type: "spot",
                typeId: spotId10,
                url: "https://www.designcurial.com/Uploads/NewsArticle/4809815/main.jpg",
            }
            //   {
            //     type: "review",
            //     typeId: reviewId1,
            //     url: "https://www.thehousedesigners.com/images/plans/01/URD/bulk/6583/the-destination-front-rendering_m.webp"
            //   },
            //   {
            //     type: "spot",
            //     typeId: spotId1,
            //     url: "https://res.cloudinary.com/dtpgi0zck/image/upload/s--IJwO_Hss--/c_fill,h_580,w_860/v1/EducationHub/photos/ocean-waves.webp"
            //   },
            //   {
            //     type: "spot",
            //     typeId: spotId2,
            //     url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
            //   },
            //   {
            //     type: "review",
            //     typeId: reviewId3,
            //     url: "https://image.shutterstock.com/image-illustration/five-golden-stars-best-rating-260nw-657712999.jpg"
            //   },
            //   {
            //     type: "spot",
            //     typeId: spotId4,
            //     url: "https://www.worldatlas.com/r/w1200/upload/7a/f8/f7/lost-city-of-atlantis.jpg"
            //   },
            //   {
            //     type: "review",
            //     typeId: reviewId5,
            //     url: "https://www.pngkey.com/png/detail/4-47353_3-stars-3-.png"
            //   }
        ]



        await queryInterface.bulkInsert(options, validImages, {})
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete(options, {}, {})
    }
};
