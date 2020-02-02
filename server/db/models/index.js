const User = require('./user')
const Product = require('./product')
const Bid = require('./bid')
const Offer = require('./offer')
const BidProduct = require('./bidProd')
const OfferProduct = require('./offerProd')


Product.belongsToMany(Bid, { through: BidProduct})
Product.belongsToMany(Offer, {through: OfferProduct})

Product.belongsTo(User)
User.hasMany(Product)


// User.hasMany(Bid)
// Bid.belongsTo(User)

// Offer.belongsTo(Product)
// Product.belongsTo(Offer)

// User.hasMany(Offer)
// Offer.belongsTo(User)

// Bid.hasMany(Offer)
// Offer.belongsTo(Bid)





module.exports = {
  User,
  Product,
  BidProduct,
  OfferProduct,
  Bid,
  Offer
}
