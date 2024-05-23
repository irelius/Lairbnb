const validImages = [
    // images for spots. get a lot more to function as preview
    {
        type: "spot",
        typeId: 1,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 1,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/1-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 1,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/1-2.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 1,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/1-3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 1,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/1-4.jpg",
        previewImg: false
    },

    {
        type: "spot",
        typeId: 2,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 2,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/2-1.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 2,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/2-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 2,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/2-3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 2,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/2-4.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 2,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/2-5.jpg",
        previewImg: true
    },

    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/3-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/3-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/3-3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/3-4.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/3-5.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 3,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/3-6.jpg",
        previewImg: true
    },

    {
        type: "spot",
        typeId: 4,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/4.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 4,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/4-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 4,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/4-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 4,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/4-3.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 4,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/4-4.jpg",
        previewImg: false
    },


    {
        type: "spot",
        typeId: 5,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/5.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 5,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/5-1.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 5,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/5-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 5,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/5-3.jpg",
        previewImg: true
    },



    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/6.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/6-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/6-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/6-3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/6-4.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/6-5.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/6-6.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/6-7.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 6,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/6-8.jpg",
        previewImg: true
    },


    {
        type: "spot",
        typeId: 7,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/7.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 7,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/7-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 7,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/7-2.jpg",
        previewImg: true
    },


    {
        type: "spot",
        typeId: 8,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/8.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 8,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/8-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 8,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/8-2.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 8,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/8-3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 8,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/8-4.jpg",
        previewImg: true
    },

    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/9.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/9-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/9-2.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/9-3.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/9-4.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/9-5.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/9-6.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/9-7.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 9,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/9-8.jpg",
        previewImg: true
    },


    {
        type: "spot",
        typeId: 10,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/10.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 10,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/10-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 10,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/10-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 10,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/10-3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 10,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/10-4.jpg",
        previewImg: true
    },

    {
        type: "spot",
        typeId: 11,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/11.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 11,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/11-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 11,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/11-2.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 11,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/11-3.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 11,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/11-4.jpg",
        previewImg: true
    },

    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/12.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/12-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/12-2.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/12-3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/12-4.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/12-5.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 12,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/12-6.jpg",
        previewImg: true
    },

    {
        type: "spot",
        typeId: 13,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/13.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 13,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/13-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 13,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/13-2.jpg",
        previewImg: false
    },

    {
        type: "spot",
        typeId: 14,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/14.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 14,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/14-1.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 14,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/14-2.jpg",
        previewImg: false
    },

    {
        type: "spot",
        typeId: 15,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/15.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 15,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/15-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 15,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/15-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 15,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/15-3.jpg",
        previewImg: true
    },

    {
        type: "spot",
        typeId: 16,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/16.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 16,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/16-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 16,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/16-2.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 16,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/16-3.jpg",
        previewImg: false
    },

    {
        type: "spot",
        typeId: 17,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/17.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 17,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/17-1.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 17,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/17-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 17,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/17-3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 17,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/17-4.jpg",
        previewImg: true
    },

    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/18.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/18-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/18-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/18-3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/18-4.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/18-5.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 18,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/18-6.jpg",
        previewImg: true
    },

    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/19.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/19-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/19-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/19-3.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/19-4.jpg",
        previewImg: false
    },
    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/19-5.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 19,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/19-6.jpg",
        previewImg: true
    },


    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/20.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/20-1.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/20-2.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/20-3.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/20-4.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/20-5.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/20-6.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/20-7.jpg",
        previewImg: true
    },
    {
        type: "spot",
        typeId: 20,
        url: "https://kblairbnb.s3.us-west-1.amazonaws.com/20-8.jpg",
        previewImg: true
    },

    // Images for reviews, still need to get images
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


    // images for user profile pic, still need to get images
]

module.exports = { validImages }
