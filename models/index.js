// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Category has many Products as a category can have multiple products but a product can only belong to one category.

Category.hasMany(Product, {
  foreignKey: 
})


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'products_belong_to_many_tag'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tag_belongs_to_many_product'
})

//* `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

// **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
