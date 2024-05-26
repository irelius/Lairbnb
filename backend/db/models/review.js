'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Review extends Model {
        static associate(models) {
            Review.hasMany(models.Image, {
                foreignKey: "typeId",
                constraints: false,
                scope: {
                    type: "review"
                },
            })
            Review.belongsTo(models.User, {
                foreignKey: 'userId',
                onDelete: "CASCADE"
            })
            Review.belongsTo(models.Spot, {
                foreignKey: 'spotId',
                onDelete: "CASCADE"
            })
        }
    }
    Review.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        spotId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        review: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        stars: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
    }, {
        sequelize,
        modelName: 'Review',
        indexes: [
            {
                unique: true,
                fields: ['spotId', 'userId']
            }
        ]
    });
    return Review;
};
