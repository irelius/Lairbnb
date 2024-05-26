const bcrypt = require("bcryptjs");

const validUsers = [
    {
        email: 'demo@aa.io',
        firstName: "Demo",
        lastName: "User",
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: 'john.doe@aa.io',
        firstName: 'John',
        lastName: 'Doe',
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: 'jane.smith@aa.io',
        firstName: 'Jane',
        lastName: 'Smith',
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: 'alice.johnson@aa.io',
        firstName: 'Alice',
        lastName: 'Johnson',
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: 'bob.brown@aa.io',
        firstName: 'Bob',
        lastName: 'Brown',
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: 'charlie.davis@aa.io',
        firstName: 'Charlie',
        lastName: 'Davis',
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: 'diana.evans@aa.io',
        firstName: 'Diana',
        lastName: 'Evans',
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: 'edward.franklin@aa.io',
        firstName: 'Edward',
        lastName: 'Franklin',
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: 'fiona.green@aa.io',
        firstName: 'Fiona',
        lastName: 'Green',
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: 'george.harris@aa.io',
        firstName: 'George',
        lastName: 'Harris',
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: 'hannah.ives@aa.io',
        firstName: 'Hannah',
        lastName: 'Ives',
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: "charles.green@aa.io",
        firstName: "Charles",
        lastName: "Green",
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: "amanda.lee@aa.io",
        firstName: "Amanda",
        lastName: "Lee",
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: "robert.king@aa.io",
        firstName: "Robert",
        lastName: "King",
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: "jessica.harris@aa.io",
        firstName: "Jessica",
        lastName: "Harris",
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: "daniel.clark@aa.io",
        firstName: "Daniel",
        lastName: "Clark",
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: "ashley.wright@aa.io",
        firstName: "Ashley",
        lastName: "Wright",
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: "matthew.hall@aa.io",
        firstName: "Matthew",
        lastName: "Hall",
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: "patricia.lopez@aa.io",
        firstName: "Patricia",
        lastName: "Lopez",
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: "steven.scott@aa.io",
        firstName: "Steven",
        lastName: "Scott",
        hashedPassword: bcrypt.hashSync('password')
    },
    {
        email: "mary.morris@aa.io",
        firstName: "Mary",
        lastName: "Morris",
        hashedPassword: bcrypt.hashSync('password')
    }
]

module.exports = {
    validUsers
}
