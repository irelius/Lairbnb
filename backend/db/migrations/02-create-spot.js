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
					type: Sequelize.STRING(120),
					allowNull: true,
				},
				address2: {
					type: Sequelize.STRING(30),
					allowNull: true,
				},
				city: {
					type: Sequelize.STRING(60),
					allowNull: true,
				},
				state: {
					type: Sequelize.STRING(30),
					allowNull: true,
				},
				country: {
					type: Sequelize.STRING(30),
					allowNull: true,
				},
				lat: {
					type: Sequelize.DECIMAL,
					allowNull: true,
				},
				lng: {
					type: Sequelize.DECIMAL,
					allowNull: true,
				},
				name: {
					type: Sequelize.STRING(60),
					allowNull: true,
				},
				structure: {
					type: Sequelize.STRING(30),
					allowNull: true,
				},
				description: {
					type: Sequelize.TEXT,
					allowNull: true,
				},
				guest: {
					type: Sequelize.INTEGER,
					allowNull: true,
					defaultValue: 2,
				},
				bedroom: {
					type: Sequelize.INTEGER,
					allowNull: true,
					defaultValue: 0,
				},
				bed: {
					type: Sequelize.INTEGER,
					allowNull: true,
					defaultValue: 1,
				},
				bathroom: {
					type: Sequelize.DECIMAL,
					allowNull: true,
					defaultValue: 1,
				},
				price: {
					type: Sequelize.DECIMAL,
					allowNull: true,
				},
				weekendPrice: {
					type: Sequelize.DECIMAL,
					allowNull: true,
				},
				draft: {
					type: Sequelize.BOOLEAN,
					defaultValue: true,
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
