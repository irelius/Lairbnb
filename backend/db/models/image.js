'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Image extends Model {
        static associate(models) {
            Image.belongsTo(models.Review, {
                foreignKey: 'typeId',
                constraints: false
            })
            Image.belongsTo(models.Spot, {
                foreignKey: 'typeId',
                constraints: false
            })
            Image.belongsTo(models.User, {
                foreignKey: 'userId',
                constraints: false
            })
        }
    }
    Image.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // determine if image url is for a profile, spot, or review
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // type ID is for the id of the type (user, spot, review)
        typeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        sequelize,
        modelName: 'Image',
    });
    return Image;
};
