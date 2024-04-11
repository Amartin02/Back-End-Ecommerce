const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");
const { INTEGER } = require("sequelize");

class Category extends Model {}

Category.init(
  {
    id: {
      DataTypes: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    }, // define columns
    category_name: {
      DataTypes: STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
