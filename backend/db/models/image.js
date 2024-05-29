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
            Image.belongsTo(models.User, {
                foreignKey: "userId",
                constraints: false,
                onDelete: "CASCADE",
                as: "ownerId"
            })
        }
    }
    Image.init({
        // who is the one who posted the image
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // determine if image type is for a user, spot, or review
        type: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1, 10],
                checkProperType(value) {
                    if(value !== "user" && value !== "spot" && value !== "review") {
                        throw new Error("Image type is not of the valid options (user, spot, or review).")
                    }
                }
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
                checkIfForSpot() {
                    if (this.type !== "spot") {
                        throw new Error("Only images for spots can be set as a preview image.")
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
