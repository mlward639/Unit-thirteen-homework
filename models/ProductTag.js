// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// create ProductTag model
class ProductTag extends Model {}

// set up fields and rules for ProductTag model
ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      references: {
        model: 'product',
        key: 'id', 
        unique: false
      },
    }, 
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tag',
        key: 'id',
        unique: false
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
