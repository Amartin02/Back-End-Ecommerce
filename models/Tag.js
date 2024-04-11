const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");
const { INTEGER } = require("sequelize");
const { STRING } = require("sequelize");

class Tag extends Model {}

Tag.init(
  {
    id: {
      DataTypes: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      DataTypes: STRING,
    },
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;
