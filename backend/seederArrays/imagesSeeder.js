const validImages = [
    // images for spots. get a lot more to function as preview
    {
        type: "spot",
        typeId: 1,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 1,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/1-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 1,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/1-2.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 1,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/1-3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 1,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/1-4.jpg",
        previewImg: false
    },

    {
        type: "spot",
        typeId: 2,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 2,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/2-1.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 2,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/2-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 2,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/2-3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 2,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/2-4.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 2,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/2-5.jpg",
        previewImg: true
    },

    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/3-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/3-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/3-3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/3-4.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/3-5.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/3-6.jpg",
        previewImg: true
    },

    {
        type: "spot",
        typeId: 4,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/4.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 4,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/4-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 4,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/4-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 4,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/4-3.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 4,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/4-4.jpg",
        previewImg: false
    },


    {
        type: "spot",
        typeId: 5,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/5.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 5,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/5-1.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 5,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/5-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 5,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/5-3.jpg",
        previewImg: true
    },



    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/6.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/6-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/6-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/6-3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/6-4.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/6-5.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/6-6.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/6-7.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/6-8.jpg",
        previewImg: true
    },


    {
        type: "spot",
        typeId: 7,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/7.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 7,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/7-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 7,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/7-2.jpg",
        previewImg: true
    },


    {
        type: "spot",
        typeId: 8,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/8.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 8,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/8-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 8,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/8-2.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 8,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/8-3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 8,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/8-4.jpg",
        previewImg: true
    },

    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/9.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/9-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/9-2.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/9-3.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/9-4.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/9-5.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/9-6.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/9-7.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/9-8.jpg",
        previewImg: true
    },


    {
        type: "spot",
        typeId: 10,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/10.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 10,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/10-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 10,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/10-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 10,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/10-3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 10,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/10-4.jpg",
        previewImg: true
    },

    {
        type: "spot",
        typeId: 11,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/11.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 11,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/11-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 11,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/11-2.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 11,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/11-3.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 11,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/11-4.jpg",
        previewImg: true
    },

    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/12.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/12-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/12-2.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/12-3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/12-4.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/12-5.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/12-6.jpg",
        previewImg: true
    },

    {
        type: "spot",
        typeId: 13,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/13.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 13,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/13-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 13,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/13-2.jpg",
        previewImg: false
    },

    {
        type: "spot",
        typeId: 14,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/14.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 14,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/14-1.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 14,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/14-2.jpg",
        previewImg: false
    },

    {
        type: "spot",
        typeId: 15,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/15.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 15,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/15-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 15,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/15-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 15,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/15-3.jpg",
        previewImg: true
    },

    {
        type: "spot",
        typeId: 16,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/16.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 16,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/16-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 16,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/16-2.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 16,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/16-3.jpg",
        previewImg: false
    },

    {
        type: "spot",
        typeId: 17,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/17.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 17,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/17-1.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 17,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/17-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 17,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/17-3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 17,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/17-4.jpg",
        previewImg: true
    },

    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/18.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/18-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/18-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/18-3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/18-4.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/18-5.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/18-6.jpg",
        previewImg: true
    },

    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/19.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/19-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/19-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/19-3.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/19-4.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/19-5.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/19-6.jpg",
        previewImg: true
    },


    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/20.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/20-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/20-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/20-3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/20-4.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/20-5.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/20-6.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/20-7.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/spotsSeeder/20-8.jpg",
        previewImg: true
    },

    // Images for reviews, still need to get images. previewImg defaults to false (only a function for spot images)
    {
        type: "review",
        typeId: 1,
        previewImg: false
    },
    {
        type: "review",
        typeId: 2,
        previewImg: false
    },
    {
        type: "review",
        typeId: 3,
        previewImg: false
    }


    // images for user profile pic, still need to get images. previewImg defaults to false (only a function for spot images)
]

module.exports = { validImages }
