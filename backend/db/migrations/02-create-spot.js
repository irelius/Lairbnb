"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
	options.schema = process.env.SCHEMA; // define your schema in options object
}
options.tableName = "Spots";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			options.tableName,
			{
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					allowNull: false,
					autoIncrement: true,
				},
				ownerId: {
					type: Sequelize.INTEGER,
					references: {
						model: "Users",
					},
					allowNull: false,
					onDelete: "CASCADE",
				},
				address: {
					type: Sequelize.STRING(60),
					allowNull: false,
				},
				city: {
					type: Sequelize.STRING(60),
					allowNull: false,
				},
				state: {
					type: Sequelize.STRING(20),
					allowNull: false,
				},
				country: {
					type: Sequelize.STRING(30),
					allowNull: false,
				},
				lat: {
					type: Sequelize.DECIMAL,
					allowNull: false,
				},
				lng: {
					type: Sequelize.DECIMAL,
					allowNull: false,
				},
				name: {
					type: Sequelize.STRING(60),
					allowNull: false,
				},
				type: {
					type: Sequelize.STRING(30),
					allowNull: false,
				},
				description: {
					type: Sequelize.TEXT,
					allowNull: false,
				},
				guest: {
					type: Sequelize.INTEGER,
					defaultValue: 2,
				},
				bedroom: {
					type: Sequelize.INTEGER,
					defaultValue: 0,
				},
				bed: {
					type: Sequelize.INTEGER,
					defaultValue: 1,
				},
				bathroom: {
					type: Sequelize.DECIMAL,
					defaultValue: 1,
				},
				price: {
					type: Sequelize.DECIMAL,
					allowNull: false,
				},
				createdAt: {
					allowNull: false,
					type: Sequelize.DATE,
					defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
				},
				updatedAt: {
					allowNull: false,
					type: Sequelize.DATE,
					defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
				},
			},
			options
		);
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable(options.tableName, options);
	},
};
