'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Image extends Model {
        static associate(models) {
            Image.belongsTo(models.Review, {
                foreignKey: 'typeId',
                constraints: false,
                onDelete: "CASCADE"
            })
            Image.belongsTo(models.Spot, {
                foreignKey: 'typeId',
                constraints: false,
                onDelete: "CASCADE"
            })
            Image.belongsTo(models.User, {
                foreignKey: 'typeId',
                constraints: false,
                onDelete: "CASCADE"
            })
        }
    }
    Image.init({
        // determine if image type is for a user, spot, or review
        type: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        },
        // type ID is for the id of the type (user, spot, review). functions as the PK of the parent table
        typeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        previewImg: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
            validate: {
                checkIfForSpot(value) {
                    if(this.type !== "spot") {
                        throw new Error("Preview image status should only be for spots")
                    }
                }
            }
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: true
        },
    }, {
        sequelize,
        modelName: 'Image',
    });
    return Image;
};
