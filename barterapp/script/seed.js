'use strict'

const db = require('../server/db')
const {User, Product, Auction, UserAuction, UserOffer} = require('../server/db/models')


async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  // const users = await Promise.all([
  //   User.create({email: 'cody@email.com', password: '123', location: 'NYC'}),
  //   User.create({email: 'murphy@email.com', password: '123', location: 'NYC'}),
  //   Product.create({name: 'Juicer',status: 'bid',kind: 'item'}),
  //   Product.create({name: 'Bike',status: 'bid',kind: 'item'}),

  const user = await User.create({email: 'cody@email.com', password: '123', location: 'NYC'})
  const user2 = await User.create({email: 'cody2@email.com', password: '123', location: 'NYC'})
  const user3 = await User.create({email: 'cody3@email.com', password: '123', location: 'NYC'})
  const product = await Product.create({name: 'Juicer',status: 'auction',kind: 'item'})
  const product2 = await Product.create({name: 'Not a Juicer',status: 'offer',kind: 'item'})
  const product3 = await Product.create({name: 'Not a Juicer2',status: 'offer',kind: 'item'})
  const product4 = await Product.create({name: 'Also not a Juicer',status: 'offer',kind: 'item'})



  await product.setAuctionOwner(user)
  await product4.setOfferOwner(user)
  await product2.addAuctionProduct(product, {through: {status: 'pending'}})
  await product3.addAuctionProduct(product, {through: {status: 'pending'}})
  const auctions = await product.getAuctionOwner()
  const offers = await product4.getOfferOwner()

  console.log('these are auctions', auctions)
  console.log('these are offers', offers)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
