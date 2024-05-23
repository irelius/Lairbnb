const validBookings = [
    {
        spotId: 1,
        userId: 2,
        startDate: new Date("2025-01-17"),
        endDate: new Date("2025-01-18")
    },
    {
        spotId: 2,
        userId: 3,
        startDate: new Date("2025-02-01"),
        endDate: new Date("2025-02-05")
    },
    {
        spotId: 3,
        userId: 4,
        startDate: new Date("2025-03-10"),
        endDate: new Date("2025-03-12")
    },
    {
        spotId: 4,
        userId: 5,
        startDate: new Date("2025-04-15"),
        endDate: new Date("2025-04-20")
    },
    {
        spotId: 5,
        userId: 6,
        startDate: new Date("2025-05-25"),
        endDate: new Date("2025-05-30")
    },
    {
        spotId: 1,
        userId: 2,
        startDate: new Date("2025-02-01"),
        endDate: new Date("2025-02-03")
    },
    {
        spotId: 2,
        userId: 3,
        startDate: new Date("2025-02-10"),
        endDate: new Date("2025-02-12")
    },
    {
        spotId: 3,
        userId: 4,
        startDate: new Date("2025-03-15"),
        endDate: new Date("2025-03-18")
    },
    {
        spotId: 4,
        userId: 5,
        startDate: new Date("2025-05-01"),
        endDate: new Date("2025-05-05")
    },
    {
        spotId: 5,
        userId: 6,
        startDate: new Date("2025-06-01"),
        endDate: new Date("2025-06-07")
    },
    {
        spotId: 6,
        userId: 7,
        startDate: new Date("2025-01-01"),
        endDate: new Date("2025-01-03")
    },
    {
        spotId: 7,
        userId: 8,
        startDate: new Date("2025-02-15"),
        endDate: new Date("2025-02-20")
    },
    {
        spotId: 8,
        userId: 9,
        startDate: new Date("2025-03-05"),
        endDate: new Date("2025-03-10")
    },
    {
        spotId: 9,
        userId: 10,
        startDate: new Date("2025-04-01"),
        endDate: new Date("2025-04-05")
    },
    {
        spotId: 10,
        userId: 1,
        startDate: new Date("2025-05-01"),
        endDate: new Date("2025-05-05")
    },
    {
        spotId: 6,
        userId: 7,
        startDate: new Date("2025-01-10"),
        endDate: new Date("2025-01-15")
    },
    {
        spotId: 7,
        userId: 8,
        startDate: new Date("2025-02-25"),
        endDate: new Date("2025-02-28")
    },
    {
        spotId: 8,
        userId: 9,
        startDate: new Date("2025-03-15"),
        endDate: new Date("2025-03-18")
    },
    {
        spotId: 9,
        userId: 10,
        startDate: new Date("2025-04-10"),
        endDate: new Date("2025-04-15")
    },
    {
        spotId: 10,
        userId: 1,
        startDate: new Date("2025-05-10"),
        endDate: new Date("2025-05-15")
    },
    {
        spotId: 11,
        userId: 2,
        startDate: new Date("2025-06-01"),
        endDate: new Date("2025-06-05")
    },
    {
        spotId: 12,
        userId: 3,
        startDate: new Date("2025-07-01"),
        endDate: new Date("2025-07-05")
    },
    {
        spotId: 13,
        userId: 4,
        startDate: new Date("2025-08-01"),
        endDate: new Date("2025-08-05")
    },
    {
        spotId: 14,
        userId: 5,
        startDate: new Date("2025-09-01"),
        endDate: new Date("2025-09-05")
    },
    {
        spotId: 15,
        userId: 6,
        startDate: new Date("2025-10-01"),
        endDate: new Date("2025-10-05")
    },
    {
        spotId: 11,
        userId: 2,
        startDate: new Date("2025-06-10"),
        endDate: new Date("2025-06-15")
    },
    {
        spotId: 12,
        userId: 3,
        startDate: new Date("2025-07-10"),
        endDate: new Date("2025-07-15")
    },
    {
        spotId: 13,
        userId: 4,
        startDate: new Date("2025-08-10"),
        endDate: new Date("2025-08-15")
    },
    {
        spotId: 14,
        userId: 5,
        startDate: new Date("2025-09-10"),
        endDate: new Date("2025-09-15")
    },
    {
        spotId: 15,
        userId: 6,
        startDate: new Date("2025-10-10"),
        endDate: new Date("2025-10-15")
    },
    {
        spotId: 16,
        userId: 7,
        startDate: new Date("2025-11-01"),
        endDate: new Date("2025-11-05")
    },
    {
        spotId: 17,
        userId: 8,
        startDate: new Date("2025-12-01"),
        endDate: new Date("2025-12-05")
    },
    {
        spotId: 18,
        userId: 9,
        startDate: new Date("2025-11-10"),
        endDate: new Date("2025-11-15")
    },
    {
        spotId: 19,
        userId: 10,
        startDate: new Date("2025-12-10"),
        endDate: new Date("2025-12-15")
    },
    {
        spotId: 20,
        userId: 1,
        startDate: new Date("2025-11-20"),
        endDate: new Date("2025-11-25")
    },
    {
        spotId: 16,
        userId: 7,
        startDate: new Date("2025-11-10"),
        endDate: new Date("2025-11-15")
    },
    {
        spotId: 17,
        userId: 8,
        startDate: new Date("2025-12-10"),
        endDate: new Date("2025-12-15")
    },
    {
        spotId: 18,
        userId: 9,
        startDate: new Date("2025-11-20"),
        endDate: new Date("2025-11-25")
    },
    {
        spotId: 19,
        userId: 10,
        startDate: new Date("2025-12-20"),
        endDate: new Date("2025-12-25")
    },
    {
        spotId: 20,
        userId: 1,
        startDate: new Date("2025-12-01"),
        endDate: new Date("2025-12-05")
    }
]

module.exports = {
    validBookings
}
