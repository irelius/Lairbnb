'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Images"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(options.tableName, {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            type: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            typeId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            previewImg: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            url: {
                type: Sequelize.TEXT,
                allowNull: true,
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
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable(options.tableName, options);
    }
};
