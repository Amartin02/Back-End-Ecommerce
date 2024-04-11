// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category);
// Categories have many Products
Category.hasMany(Product);
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: { ProductTag, foreignKey: "product_id" },
  as: "product_tags",
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: { ProductTag, foreignKey: "tag_id" },
  as: "tag_products",
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
