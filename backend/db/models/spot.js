'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    static associate(models) {
      Spot.hasMany(
        models.Image,
        {
          foreignKey: 'spotId',
          hooks: true
        }
      )
      Spot.hasMany(
        models.Review,
        {
          foreignKey: 'spotId',
          hooks: true
        }
      )
      Spot.hasMany(
        models.Booking,
        {
          foreignKey: 'spotId',
          hooks: true
        }
      )
      Spot.belongsTo(
        models.User,
        {
          as: 'Owner',
          foreignKey: 'ownerId'
        },
      )
    }

  }
  Spot.init({
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lat: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    lng: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    numReviews: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    avgStarRating: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    previewImg: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};
