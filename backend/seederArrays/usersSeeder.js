const bcrypt = require("bcryptjs");

const validUsers = [
    {
        email: 'demo@user.io',
        firstName: "Demo",
        lastName: "User",
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: 'john.doe@user.io',
        firstName: 'John',
        lastName: 'Doe',
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: 'jane.smith@user.io',
        firstName: 'Jane',
        lastName: 'Smith',
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: 'alice.johnson@user.io',
        firstName: 'Alice',
        lastName: 'Johnson',
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: 'bob.brown@user.io',
        firstName: 'Bob',
        lastName: 'Brown',
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: 'charlie.davis@user.io',
        firstName: 'Charlie',
        lastName: 'Davis',
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: 'diana.evans@user.io',
        firstName: 'Diana',
        lastName: 'Evans',
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: 'edward.franklin@user.io',
        firstName: 'Edward',
        lastName: 'Franklin',
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: 'fiona.green@user.io',
        firstName: 'Fiona',
        lastName: 'Green',
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: 'george.harris@user.io',
        firstName: 'George',
        lastName: 'Harris',
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: 'hannah.ives@user.io',
        firstName: 'Hannah',
        lastName: 'Ives',
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: "charles.green@user.io",
        firstName: "Charles",
        lastName: "Green",
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: "amanda.lee@user.io",
        firstName: "Amanda",
        lastName: "Lee",
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: "robert.king@user.io",
        firstName: "Robert",
        lastName: "King",
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: "jessica.harris@user.io",
        firstName: "Jessica",
        lastName: "Harris",
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: "daniel.clark@user.io",
        firstName: "Daniel",
        lastName: "Clark",
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: "ashley.wright@user.io",
        firstName: "Ashley",
        lastName: "Wright",
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: "matthew.hall@user.io",
        firstName: "Matthew",
        lastName: "Hall",
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: "patricia.lopez@user.io",
        firstName: "Patricia",
        lastName: "Lopez",
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: "steven.scott@user.io",
        firstName: "Steven",
        lastName: "Scott",
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: "mary.morris@user.io",
        firstName: "Mary",
        lastName: "Morris",
        hashedPassword: bcrypt.hashSync('password')
    }
]

module.exports = {
    validUsers
}
