'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      Image.belongsTo(
        models.Review,
        { foreignKey: 'reviewId' }
      )
      Image.belongsTo(
        models.Spot,
        { foreignKey: 'spotId' }
      )
    }
  }
  Image.init({
    reviewId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    spotId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
