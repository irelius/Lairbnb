"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Spot extends Model {
		static associate(models) {
			Spot.hasMany(models.Image, {
				foreignKey: "typeId",
				constraints: false,
				scope: {
					type: "spot",
				},
			});
			Spot.hasMany(models.Review, {
				foreignKey: "spotId",
				hooks: true,
			});
			Spot.hasMany(models.Booking, {
				foreignKey: "spotId",
				hooks: true,
			});
			Spot.hasMany(models.SpotType, {
				foreignKey: "spotId",
				hooks: true,
			});
			Spot.belongsTo(models.User, {
				as: "owner",
				foreignKey: "ownerId",
				onDelete: "CASCADE",
			});
		}
	}
	Spot.init(
		{
			ownerId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			address: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1, 60],
				},
			},
			city: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1, 60],
				},
			},
			state: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1, 20],
				},
			},
			country: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1, 30],
					checkUSA(value) {
						if (value !== "United States of America" && value !== "USA") {
							throw new Error("Currently, only locations in the USA are allowed. WIP");
						}
					},
				},
			},
			lat: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				validate: {
					min: -90,
					max: 90,
				},
			},
			lng: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				validate: {
					min: -180,
					max: 180,
				},
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [1, 60],
				},
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			guest: {
				type: DataTypes.INTEGER,
				defaultValue: 2,
				validate: {
					min: -1,
				},
			},
			bedroom: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
				validate: {
					min: 0,
				},
			},
			bed: {
				type: DataTypes.INTEGER,
				defaultValue: 1,
				validate: {
					min: 1,
				},
			},
			bathroom: {
				type: DataTypes.DECIMAL,
				defaultValue: 1,
				validate: {
					min: 0.5,
				},
			},
			price: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				validate: {
					min: 0,
				},
			},
		},
		{
			sequelize,
			modelName: "Spot",
		}
	);
	return Spot;
};
