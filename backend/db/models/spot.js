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
			Spot.hasMany(models.SpotAmenity, {
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
				allowNull: true,
				validate: {
					len: [1, 120],
				},
			},
			address2: {
				type: DataTypes.STRING,
				allowNull: true,
				validate: {
					len: [1, 30],
				},
			},
			city: {
				type: DataTypes.STRING,
				allowNull: true,
				validate: {
					len: [1, 60],
				},
			},
			state: {
				type: DataTypes.STRING,
				allowNull: true,
				validate: {
					len: [1, 30],
				},
			},
			country: {
				type: DataTypes.STRING,
				allowNull: true,
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
				allowNull: true,
				validate: {
					min: -90,
					max: 90,
				},
			},
			lng: {
				type: DataTypes.DECIMAL,
				allowNull: true,
				validate: {
					min: -180,
					max: 180,
				},
			},
			name: {
				type: DataTypes.STRING,
				allowNull: true,
				validate: {
					len: [1, 60],
				},
			},
			structure: {
				type: DataTypes.STRING,
				allowNull: true,
				validate: {
					validStructure(val) {
						const structures = new Set([
							"house",
							"apartment",
							"bed&breakfast",
							"boat",
							"camper/RV",
							"castle",
							"guesthouse",
							"hotel",
							"tent",
						]);

						if (!structures.has(val)) {
							throw new Error("Provided structure type is not a valid option");
						}
					},
				},
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			guest: {
				type: DataTypes.INTEGER,
				defaultValue: 2,
				validate: {
					min: -1,
				},
				allowNull: true,
			},
			bedroom: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
				validate: {
					min: 0,
				},
				allowNull: true,
			},
			bed: {
				type: DataTypes.INTEGER,
				defaultValue: 1,
				validate: {
					min: 1,
				},
				allowNull: true,
			},
			bathroom: {
				type: DataTypes.DECIMAL,
				defaultValue: 1,
				validate: {
					min: 0.5,
				},
				allowNull: true,
			},
			price: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				validate: {
					min: 0.0,
				},
				allowNull: true,
			},
			weekendPrice: {
				type: DataTypes.DECIMAL,
				allowNull: false,
				validate: {
					min: 0.0,
				},
				allowNull: true,
			},
            draft: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }
		},
		{
			sequelize,
			modelName: "Spot",
		}
	);
	return Spot;
};
