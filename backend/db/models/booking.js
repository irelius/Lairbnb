'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        static associate(models) {
            Booking.belongsTo(models.User, {
                foreignKey: 'userId',
                onDelete: "CASCADE"
            })
            Booking.belongsTo(models.Spot, {
                foreignKey: 'spotId',
                onDelete: "CASCADE"
            })
        }
    }
    Booking.init({
        spotId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                checkIfBeforeStart(value) {
                    if (value < this.startDate) {
                        throw new Error("End date for a booking cannot be before its start date")
                    }
                }
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date()
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date()
        }
    }, {
        sequelize,
        modelName: 'Booking',
    });
    return Booking;
};
