const User = require('./user')
const Product = require('./product')
const Auction = require('./auction')

User.hasMany(Product, {as: 'Auction'})
User.hasMany(Product, {as: 'Offer'})

Product.belongsToMany(Product, {as: 'AuctionOrigin', through: Auction})

module.exports = {
  User,
  Product,
  Auction
}
