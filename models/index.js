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
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products

Product.belongsToMany(Tag, {
  through:{
    model: ProductTag,
    foreignKey: 'product_id'
  },
 
});

// Products belongToMany Tags (through ProductTag)

Tag.belongsToMany(Product, {
 through:{
  model: ProductTag,
  foreignKey: 'tag_id'
 },
 
});

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
