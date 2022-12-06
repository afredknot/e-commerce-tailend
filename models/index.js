// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Category.hasMany(Product, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

// Categories have many Products

Product.belongToMany(Tag, {
  through:{
    model: ProductTag,
  },
  as: 'tag_id'
});

// Products belongToMany Tags (through ProductTag)

Tag.belongToMany(Product, {
 through:{
  model: ProductTag
 },
 as: 'product_id'
});

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
