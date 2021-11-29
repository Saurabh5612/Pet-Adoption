const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Animal extends Model {}

Animal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    location_city: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    location_state: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    maintenance: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    temperment: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'animal'
  }
);

module.exports = Animal;
