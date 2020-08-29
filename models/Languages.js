const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Languages extends Model {}

Languages.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   language_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    languageName: 'languages',
  },
);

module.exports = LAnguages;