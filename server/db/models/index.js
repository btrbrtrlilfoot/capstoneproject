const User = require('./user')
const Product = require('./product')
const Offer = require('./offer')

User.hasMany(Product)
Product.belongsTo(User)
Product.belongsToMany(Product, {as: 'Offer', through: Offer})

module.exports = {
  User,
  Product,
  Offer
}
