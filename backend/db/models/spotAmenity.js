"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class SpotAmenity extends Model {
        static associate(models) {
            SpotAmenity.belongsTo(models.Spot, {
                foreignKey: "spotId",
            });
        }
    }
    SpotAmenity.init(
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
            modelName: "SpotAmenity",
        }
    );
    return SpotAmenity;
};
