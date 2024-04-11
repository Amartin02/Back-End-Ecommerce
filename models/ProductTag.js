const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");
const { INTEGER } = require("sequelize");

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: product,
        key: "product_id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: tag,
        key: "tag_id",
      },
    },
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
