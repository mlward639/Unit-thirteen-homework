// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Category has many Products as a category can have multiple products but a product can only belong to one category.
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: "product_id",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
