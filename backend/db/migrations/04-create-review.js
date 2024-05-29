'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Reviews"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(options.tableName, {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                },
                onDelete: 'CASCADE',
                allowNull: false
            },
            spotId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Spots'
                },
                onDelete: 'CASCADE',
                allowNull: false
            },
            review: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            stars: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        }, options);

        // adding index causes deployment on render to break.
        // await queryInterface.addIndex(
        //     options.tableName,
        //     ["userId", "spotId"],
        //     {
        //         unique: true
        //     }
        // )
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable(options.tableName, options);
    }
};
