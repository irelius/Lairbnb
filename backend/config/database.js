// // backend/config/database.js
// const config = require('./index');

// module.exports = {
//   development: {
//     storage: config.dbFile,
//     dialect: "sqlite",
//     seederStorage: "sequelize",
//     logQueryParameters: true,
//     typeValidation: true
//   },
//   production: {
//     use_env_variable: 'DATABASE_URL',
//     dialect: 'postgres',
//     seederStorage: 'sequelize',
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false
//       }
//     },
//     define: {
//       schema: process.env.SCHEMA
//     }
//   }
// };

// backend/config/database.js
const config = require('./index');

const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;
const schema = db.schema

module.exports = {
      development: {
            storage: config.dbFile,
            dialect: "sqlite",
            seederStorage: "sequelize",
            logQueryParameters: true,
            typeValidation: true,
            username,
            password,
            database,
            host,
      },
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