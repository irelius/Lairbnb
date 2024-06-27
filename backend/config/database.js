// backend/config/database.js
const config = require('./index');

const db = config.db
const { username, password, database, schema, host } = db

const development = [
    // This is for sqlite
    {
        storage: config.dbFile,
        dialect: "sqlite",
        seederStorage: "sequelize",
        logQueryParameters: true,
        typeValidation: true
    },
    // This is for postgres
    {
        username,
        password,
        database,
        schema,
        host,
        dialect: "postgres",
        seederStorage: "sequelize"
    }
]

module.exports = {
    development: process.env.DB_DIALECT === "postgres" ? development[1] : development[0],
    production: {
        use_env_variable: 'DATABASE_URL',
        dialect: 'postgres',
        seederStorage: 'sequelize',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        define: {
            schema: process.env.SCHEMA
        }
    }
};
