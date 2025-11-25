"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class SpotType extends Model {
		static associate(models) {
			SpotType.belongsTo(models.Spot, {
				foreignKey: "spotId",
			});
		}
	}
	SpotType.init(
		{
			spotId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			type: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "SpotType",
		}
	);
	return SpotType;
};
