const validReviews = [
    {
        userId: 1,
        spotId: 1,
        review: "Strictly speaking of quality, it is ok. But for the price, great value.",
        stars: 4,
    },
    {
        userId: 1,
        spotId: 2,
        review: "crummy location. rude hosts.",
        stars: 1,
    },
    {
        userId: 1,
        spotId: 4,
        review: "Lovely place for a date.",
        stars: 5
    },
    {
        userId: 2,
        spotId: 2,
        review: "Delicious food, will come again.",
        stars: 4
    },
    {
        userId: 2,
        spotId: 3,
        review: "Amazing sights and venue.",
        stars: 5,
    },
    {
        userId: 2,
        spotId: 5,
        review: "Cozy atmosphere, highly recommended.",
        stars: 5
    },
    {
        userId: 3,
        spotId: 1,
        review: "Not impressed, needs improvement.",
        stars: 2
    },
    {
        userId: 3,
        spotId: 3,
        review: "Average food, but good service.",
        stars: 3
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
    },
    {
        userId: 3,
        spotId: 2,
        review: "Had a great time, the place was spotless.",
        stars: 5
    },
    {
        userId: 4,
        spotId: 1,
        review: "The location was perfect, close to everything.",
        stars: 4
    },
    {
        userId: 5,
        spotId: 5,
        review: "A wonderful getaway, very peaceful.",
        stars: 5
    },
    {
        userId: 6,
        spotId: 6,
        review: "The amenities were top-notch.",
        stars: 4
    },
    {
        userId: 7,
        spotId: 7,
        review: "A beautiful home with all the comforts.",
        stars: 5
    },
    {
        userId: 8,
        spotId: 8,
        review: "Great place but a bit noisy at night.",
        stars: 3
    },
    {
        userId: 9,
        spotId: 9,
        review: "Loved the decor, very chic.",
        stars: 4
    },
    {
        userId: 10,
        spotId: 10,
        review: "The hosts were very welcoming and helpful.",
        stars: 5
    },
    {
        userId: 11,
        spotId: 11,
        review: "A fantastic spot for a weekend retreat.",
        stars: 4
    },
    {
        userId: 12,
        spotId: 12,
        review: "Had everything we needed and more.",
        stars: 5
    },
    {
        userId: 13,
        spotId: 13,
        review: "Beautiful place but a bit pricey.",
        stars: 3
    },
    {
        userId: 14,
        spotId: 14,
        review: "Very comfortable and stylish.",
        stars: 5
    },
    {
        userId: 15,
        spotId: 15,
        review: "A wonderful escape from the city.",
        stars: 4
    },
    {
        userId: 16,
        spotId: 16,
        review: "The perfect place to relax and unwind.",
        stars: 5
    },
    {
        userId: 17,
        spotId: 17,
        review: "Had a great stay, will come back again.",
        stars: 5
    },
    {
        userId: 18,
        spotId: 18,
        review: "Nice place but could use some updates.",
        stars: 3
    },
    {
        userId: 19,
        spotId: 19,
        review: "Absolutely stunning location.",
        stars: 5
    },
    {
        userId: 20,
        spotId: 20,
        review: "The views were breathtaking.",
        stars: 4
    },
    {
        userId: 21,
        spotId: 1,
        review: "A perfect home away from home.",
        stars: 5
    },
    {
        userId: 3,
        spotId: 8,
        review: "The neighborhood was charming and quiet.",
        stars: 5
    },
    {
        userId: 4,
        spotId: 11,
        review: "A lovely spot for a family vacation.",
        stars: 4
    },
    {
        userId: 5,
        spotId: 14,
        review: "Comfortable and convenient.",
        stars: 5
    },
    {
        userId: 6,
        spotId: 17,
        review: "Had a great stay, everything was perfect.",
        stars: 5
    },
    {
        userId: 7,
        spotId: 20,
        review: "The place was well-equipped and clean.",
        stars: 4
    },
    {
        userId: 8,
        spotId: 3,
        review: "The ambiance was really nice.",
        stars: 4
    },
    {
        userId: 9,
        spotId: 6,
        review: "Had a pleasant stay, very relaxing.",
        stars: 4
    },
    {
        userId: 10,
        spotId: 9,
        review: "Great location and beautiful interiors.",
        stars: 5
    },
    {
        userId: 11,
        spotId: 12,
        review: "The perfect spot for a romantic getaway.",
        stars: 4
    },
    {
        userId: 12,
        spotId: 15,
        review: "Very clean and modern.",
        stars: 5
    },
    {
        userId: 13,
        spotId: 18,
        review: "Nice place, but a bit far from attractions.",
        stars: 3
    },
    {
        userId: 14,
        spotId: 4,
        review: "Had an amazing time, very comfortable.",
        stars: 5
    },
    {
        userId: 15,
        spotId: 7,
        review: "The place was cozy and welcoming.",
        stars: 4
    },
    {
        userId: 16,
        spotId: 10,
        review: "Loved the modern design.",
        stars: 5
    },
    {
        userId: 17,
        spotId: 13,
        review: "A bit noisy but otherwise great.",
        stars: 3
    },
    {
        userId: 18,
        spotId: 16,
        review: "The place was well-maintained and stylish.",
        stars: 5
    },
    {
        userId: 19,
        spotId: 20,
        review: "Had a lovely time, highly recommend.",
        stars: 5
    },
    {
        userId: 20,
        spotId: 2,
        review: "Nice place but not very spacious.",
        stars: 3
    },
    {
        userId: 21,
        spotId: 5,
        review: "Great amenities and very clean.",
        stars: 4
    },
    {
        userId: 1,
        spotId: 3,
        review: "The location was ideal, close to major attractions.",
        stars: 4,
    },
    {
        userId: 2,
        spotId: 8,
        review: "The place was clean but lacked some basic amenities.",
        stars: 3,
    },
    {
        userId: 3,
        spotId: 19,
        review: "Great spot, would visit again.",
        stars: 5,
    },
    {
        userId: 4,
        spotId: 12,
        review: "The hosts were very accommodating and friendly.",
        stars: 4,
    },
    {
        userId: 5,
        spotId: 9,
        review: "The view from the room was spectacular.",
        stars: 5,
    },
    {
        userId: 6,
        spotId: 2,
        review: "The place was well-furnished and comfortable.",
        stars: 4,
    },
    {
        userId: 7,
        spotId: 4,
        review: "A bit noisy but overall a good stay.",
        stars: 3,
    },
    {
        userId: 8,
        spotId: 7,
        review: "Lovely place, great for a weekend getaway.",
        stars: 4,
    },
    {
        userId: 9,
        spotId: 5,
        review: "The house was beautiful, but the neighborhood was not great.",
        stars: 3,
    },
    {
        userId: 10,
        spotId: 1,
        review: "Perfect for a short stay, everything we needed.",
        stars: 4,
    },
    {
        userId: 11,
        spotId: 6,
        review: "Wonderful experience, highly recommend!",
        stars: 5,
    },
    {
        userId: 12,
        spotId: 8,
        review: "A cozy place with a nice ambiance.",
        stars: 4,
    },
    {
        userId: 13,
        spotId: 11,
        review: "The place was okay, but not worth the price.",
        stars: 3,
    },
    {
        userId: 14,
        spotId: 19,
        review: "Excellent stay, very comfortable.",
        stars: 5,
    },
    {
        userId: 15,
        spotId: 18,
        review: "Good location but needs better maintenance.",
        stars: 3,
    },
    {
        userId: 16,
        spotId: 14,
        review: "The home was spotless and very stylish.",
        stars: 5,
    },
    {
        userId: 17,
        spotId: 2,
        review: "Convenient location, but could use some updates.",
        stars: 3,
    },
    {
        userId: 18,
        spotId: 5,
        review: "Fantastic place, had everything we needed.",
        stars: 5,
    },
    {
        userId: 19,
        spotId: 11,
        review: "The view from the balcony was stunning.",
        stars: 4,
    },
    {
        userId: 20,
        spotId: 13,
        review: "Very comfortable stay, close to many attractions.",
        stars: 4,
    },
    {
        userId: 1,
        spotId: 7,
        review: "The place was dirty and poorly maintained.",
        stars: 1,
    },
    {
        userId: 2,
        spotId: 4,
        review: "Very noisy location, couldn't sleep well.",
        stars: 1,
    },
    {
        userId: 3,
        spotId: 10,
        review: "Not worth the price, very disappointing.",
        stars: 1,
    },
    {
        userId: 4,
        spotId: 9,
        review: "The amenities were lacking and outdated.",
        stars: 2,
    },
    {
        userId: 5,
        spotId: 3,
        review: "The place was not clean, and the service was poor.",
        stars: 1,
    },
    {
        userId: 6,
        spotId: 15,
        review: "Very basic and not well kept.",
        stars: 2,
    },
    {
        userId: 7,
        spotId: 11,
        review: "The photos were misleading, not as advertised.",
        stars: 1,
    },
    {
        userId: 8,
        spotId: 2,
        review: "The place needs major renovations.",
        stars: 1,
    },
    {
        userId: 9,
        spotId: 12,
        review: "Uncomfortable stay, wouldn't recommend.",
        stars: 1,
    },
    {
        userId: 10,
        spotId: 18,
        review: "Subpar experience, expected more.",
        stars: 2,
    },
    {
        userId: 11,
        spotId: 7,
        review: "The location was bad and the room was dirty.",
        stars: 1,
    },
    {
        userId: 12,
        spotId: 13,
        review: "Very noisy and not well maintained.",
        stars: 2,
    },
    {
        userId: 13,
        spotId: 6,
        review: "Terrible service and unclean facilities.",
        stars: 1,
    },
    {
        userId: 14,
        spotId: 17,
        review: "Not a pleasant stay, the room was not as described.",
        stars: 2,
    },
    {
        userId: 15,
        spotId: 1,
        review: "Wouldn't stay here again, very disappointed.",
        stars: 1,
    },
    {
        userId: 16,
        spotId: 3,
        review: "The room was too small and uncomfortable.",
        stars: 2,
    },
    {
        userId: 17,
        spotId: 10,
        review: "Poorly maintained and not worth the money.",
        stars: 1,
    },
    {
        userId: 18,
        spotId: 9,
        review: "Not clean and very noisy at night.",
        stars: 2,
    },
    {
        userId: 19,
        spotId: 8,
        review: "The place was rundown and dirty.",
        stars: 1,
    },
    {
        userId: 20,
        spotId: 6,
        review: "Very basic amenities, not a good experience.",
        stars: 2,
    }

]

module.exports = {
    validReviews
}
