const validImages = [
    // images for spots. get a lot more to function as preview
    {
        type: "spot",
        typeId: 1,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-1.jpg",
        previewImg: false,
        userId: 1
    },
    {
        type: "spot",
        typeId: 1,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-1-1.jpg",
        previewImg: false,
        userId: 1
    },
    {
        type: "spot",
        typeId: 1,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-1-2.jpg",
        previewImg: false,
        userId: 1
    },
    {
        type: "spot",
        typeId: 1,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-1-3.jpg",
        previewImg: false,
        userId: 1
    },
    {
        type: "spot",
        typeId: 1,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-1-4.jpg",
        previewImg: false,
        userId: 1
    },

    {
        type: "spot",
        typeId: 2,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-2.jpg",
        previewImg: false,
        userId: 2
    },
    {
        type: "spot",
        typeId: 2,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-2-1.jpg",
        previewImg: false,
        userId: 2
    },
    {
        type: "spot",
        typeId: 2,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-2-2.jpg",
        previewImg: false,
        userId: 2
    },
    {
        type: "spot",
        typeId: 2,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-2-3.jpg",
        previewImg: false,
        userId: 2
    },
    {
        type: "spot",
        typeId: 2,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-2-4.jpg",
        previewImg: false,
        userId: 2
    },
    {
        type: "spot",
        typeId: 2,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-2-5.jpg",
        previewImg: false,
        userId: 2
    },

    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-3.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-3-1.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-3-2.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-3-3.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-3-4.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-3-5.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-3-6.jpg",
        previewImg: false,
        userId: 3
    },

    {
        type: "spot",
        typeId: 4,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-4.jpg",
        previewImg: false,
        userId: 1
    },
    {
        type: "spot",
        typeId: 4,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-4-1.jpg",
        previewImg: false,
        userId: 1
    },
    {
        type: "spot",
        typeId: 4,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-4-2.jpg",
        previewImg: false,
        userId: 1
    },
    {
        type: "spot",
        typeId: 4,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-4-3.jpg",
        previewImg: false,
        userId: 1
    },
    {
        type: "spot",
        typeId: 4,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-4-4.jpg",
        previewImg: false,
        userId: 1
    },


    {
        type: "spot",
        typeId: 5,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-5.jpg",
        previewImg: false,
        userId: 2
    },
    {
        type: "spot",
        typeId: 5,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-5-1.jpg",
        previewImg: false,
        userId: 2
    },
    {
        type: "spot",
        typeId: 5,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-5-2.jpg",
        previewImg: false,
        userId: 2
    },
    {
        type: "spot",
        typeId: 5,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-5-3.jpg",
        previewImg: false,
        userId: 2
    },



    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-6.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-6-1.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-6-2.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-6-3.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-6-4.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-6-5.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-6-6.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-6-7.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-6-8.jpg",
        previewImg: false,
        userId: 3
    },


    {
        type: "spot",
        typeId: 7,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-7.jpg",
        previewImg: false,
        userId: 1
    },
    {
        type: "spot",
        typeId: 7,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-7-1.jpg",
        previewImg: false,
        userId: 1
    },
    {
        type: "spot",
        typeId: 7,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-7-2.jpg",
        previewImg: false,
        userId: 1
    },


    {
        type: "spot",
        typeId: 8,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-8.jpg",
        previewImg: false,
        userId: 2
    },
    {
        type: "spot",
        typeId: 8,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-8-1.jpg",
        previewImg: false,
        userId: 2
    },
    {
        type: "spot",
        typeId: 8,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-8-2.jpg",
        previewImg: false,
        userId: 2
    },
    {
        type: "spot",
        typeId: 8,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-8-3.jpg",
        previewImg: false,
        userId: 2
    },
    {
        type: "spot",
        typeId: 8,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-8-4.jpg",
        previewImg: false,
        userId: 2
    },

    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-9.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-9-1.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-9-2.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-9-3.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-9-4.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-9-5.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-9-6.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-9-7.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-9-8.jpg",
        previewImg: false,
        userId: 3
    },


    {
        type: "spot",
        typeId: 10,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-10.jpg",
        previewImg: false,
        userId: 1
    },
    {
        type: "spot",
        typeId: 10,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-10-1.jpg",
        previewImg: false,
        userId: 1
    },
    {
        type: "spot",
        typeId: 10,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-10-2.jpg",
        previewImg: false,
        userId: 1
    },
    {
        type: "spot",
        typeId: 10,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-10-3.jpg",
        previewImg: false,
        userId: 1
    },
    {
        type: "spot",
        typeId: 10,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-10-4.jpg",
        previewImg: false,
        userId: 1
    },

    {
        type: "spot",
        typeId: 11,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-11.jpg",
        previewImg: false,
        userId: 2
    },
    {
        type: "spot",
        typeId: 11,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-11-1.jpg",
        previewImg: false,
        userId: 2
    },
    {
        type: "spot",
        typeId: 11,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-11-2.jpg",
        previewImg: false,
        userId: 2
    },
    {
        type: "spot",
        typeId: 11,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-11-3.jpg",
        previewImg: false,
        userId: 2
    },
    {
        type: "spot",
        typeId: 11,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-11-4.jpg",
        previewImg: false,
        userId: 2
    },

    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-12.jpg",
        previewImg: false,
        userId: 5
    },
    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-12-1.jpg",
        previewImg: false,
        userId: 5
    },
    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-12-2.jpg",
        previewImg: false,
        userId: 5
    },
    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-12-3.jpg",
        previewImg: false,
        userId: 5
    },
    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-12-4.jpg",
        previewImg: false,
        userId: 5
    },
    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-12-5.jpg",
        previewImg: false,
        userId: 5
    },
    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-12-6.jpg",
        previewImg: false,
        userId: 5
    },

    {
        type: "spot",
        typeId: 13,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-13.jpg",
        previewImg: false,
        userId: 7
    },
    {
        type: "spot",
        typeId: 13,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-13-1.jpg",
        previewImg: false,
        userId: 7
    },
    {
        type: "spot",
        typeId: 13,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-13-2.jpg",
        previewImg: false,
        userId: 7
    },

    {
        type: "spot",
        typeId: 14,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-14.jpg",
        previewImg: false,
        userId: 1
    },
    {
        type: "spot",
        typeId: 14,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-14-1.jpg",
        previewImg: false,
        userId: 1
    },
    {
        type: "spot",
        typeId: 14,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-14-2.jpg",
        previewImg: false,
        userId: 1
    },

    {
        type: "spot",
        typeId: 15,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-15.jpg",
        previewImg: false,
        userId: 4
    },
    {
        type: "spot",
        typeId: 15,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-15-1.jpg",
        previewImg: false,
        userId: 4
    },
    {
        type: "spot",
        typeId: 15,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-15-2.jpg",
        previewImg: false,
        userId: 4
    },
    {
        type: "spot",
        typeId: 15,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-15-3.jpg",
        previewImg: false,
        userId: 4
    },

    {
        type: "spot",
        typeId: 16,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-16.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 16,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-16-1.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 16,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-16-2.jpg",
        previewImg: false,
        userId: 3
    },
    {
        type: "spot",
        typeId: 16,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-16-3.jpg",
        previewImg: false,
        userId: 3
    },

    {
        type: "spot",
        typeId: 17,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-17.jpg",
        previewImg: false,
        userId: 9
    },
    {
        type: "spot",
        typeId: 17,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-17-1.jpg",
        previewImg: false,
        userId: 9
    },
    {
        type: "spot",
        typeId: 17,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-17-2.jpg",
        previewImg: false,
        userId: 9
    },
    {
        type: "spot",
        typeId: 17,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-17-3.jpg",
        previewImg: false,
        userId: 9
    },
    {
        type: "spot",
        typeId: 17,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-17-4.jpg",
        previewImg: false,
        userId: 9
    },

    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-18.jpg",
        previewImg: false,
        userId: 8
    },
    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-18-1.jpg",
        previewImg: false,
        userId: 8
    },
    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-18-2.jpg",
        previewImg: false,
        userId: 8
    },
    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-18-3.jpg",
        previewImg: false,
        userId: 8
    },
    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-18-4.jpg",
        previewImg: false,
        userId: 8
    },
    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-18-5.jpg",
        previewImg: false,
        userId: 8
    },
    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-18-6.jpg",
        previewImg: false,
        userId: 8
    },

    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-19.jpg",
        previewImg: false,
        userId: 11
    },
    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-19-1.jpg",
        previewImg: false,
        userId: 11
    },
    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-19-2.jpg",
        previewImg: false,
        userId: 11
    },
    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-19-3.jpg",
        previewImg: false,
        userId: 11
    },
    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-19-4.jpg",
        previewImg: false,
        userId: 11
    },
    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-19-5.jpg",
        previewImg: false,
        userId: 11
    },
    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-19-6.jpg",
        previewImg: false,
        userId: 11
    },


    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-20.jpg",
        previewImg: false,
        userId: 6
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-20-1.jpg",
        previewImg: false,
        userId: 6
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-20-2.jpg",
        previewImg: false,
        userId: 6
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-20-3.jpg",
        previewImg: false,
        userId: 6
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-20-4.jpg",
        previewImg: false,
        userId: 6
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-20-5.jpg",
        previewImg: false,
        userId: 6
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-20-6.jpg",
        previewImg: false,
        userId: 6
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-20-7.jpg",
        previewImg: false,
        userId: 6
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spots-20-8.jpg",
        previewImg: false,
        userId: 6
    },

    // Images for reviews, still need to get images. previewImg defaults to false (only a function for spot images)
    {
        type: "review",
        typeId: 1,
        previewImg: false,
        userId: 1
    },
    {
        type: "review",
        typeId: 2,
        previewImg: false,
        userId: 1
    },
    {
        type: "review",
        typeId: 3,
        previewImg: false,
        userId: 1
    }


    // images for user profile pic, still need to get images. previewImg defaults to false (only a function for spot images)
]

module.exports = { validImages }
