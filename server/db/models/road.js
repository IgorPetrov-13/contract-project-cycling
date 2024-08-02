'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Road extends Model {
    
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      
    }
  }
  Road.init({
    title: DataTypes.STRING,
    mapLink: DataTypes.TEXT,
    length: DataTypes.INTEGER,
    city: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Road',
  });
  return Road;
};