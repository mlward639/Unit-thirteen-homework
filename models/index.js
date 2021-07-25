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
  foreignKey: 'category_id',
})


/*
WHAT IS THE DIFFERENCE BETWEEN THESE TWO (AS VS FOREIGN KEY) AND WHEN TO USE WHICH ******************
NONE ARE WORKING NOW, GO BACK ONCE WORKING AND SEE WHICH OF THE THREE WORK. GO THROUGH WITH TUTOR AND THEN DELETE AND RECOMMIT/PUSH TO GITHUB
SHOWN IN CLASS:
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'products_belong_to_many_tag'
});
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tag_belongs_to_many_product'
})

SEEN ANOTHER WAY:
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id'
});
});*/

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'tag_id'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
