'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Road extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Road.init({
    map: DataTypes.TEXT,
    length: DataTypes.INTEGER,
    sity: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Road',
  });
  return Road;
};