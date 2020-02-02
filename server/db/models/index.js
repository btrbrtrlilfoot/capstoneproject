const User = require('./user')
const Product = require('./product')
const Auction = require('./auction')


const UserAuction = Product.belongsTo(User, {as: 'AuctionOwner',  constraints: false})
const UserOffer = Product.belongsTo(User, {as: 'OfferOwner',  constraints: false})
Product.belongsToMany(Product, {as: 'AuctionProduct', through: Auction})

module.exports = {
  User,
  Product,
  Auction,
  UserAuction,
  UserOffer
}
