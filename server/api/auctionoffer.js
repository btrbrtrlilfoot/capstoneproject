const router = require('express').Router()
const {User, Auction, Product} = require('../db/models')
module.exports = router

//get offers associated with an auctionProductID
router.get('/:auctionId', async (req, res, next) => {
  try {
    const auctionId = req.params.auctionId
    const product = await Product.findOne({
      where: {id: auctionId},
      include: { model: Product, as: 'Offer' }
    })

    res.json(product)
  } catch (err) {
    next(err)
  }
})

///Update auction based on selected offer
//should reject all other offers
router.put('/:auctionId/', async (req, res, next) => {
  try {
    //Grab product thats being put up for auction, set status as closed auction
    //this is so that we can differentiate auctions later
    const auctionId = req.params.auctionId
    const auction = await Product.findByPk(auctionId)
    auction.status = 'auction (closed)'
    await auction.save();
    const selectedId = req.body.offerId
    const acceptedOffer =  await Product.findByPk(selectedId)
    //req.body should contin keyvalue pair of
    // {offerId: <productId>} of the accepted product
    //find the accepted offer product, return it from this request

    //update related offers in the auction table as accepted/rejected
    const offers = await Auction.findAll({
      where: {AuctionProductId: auctionId}
    })
    for(let idx in offers){
      if(offers[idx].productId === selectedId)
      { offers[idx].status = 'accepted' }
      else {
        offers[idx].status = 'rejected'
      }
      await offers[idx].save()
    }

    res.json(acceptedOffer)
  } catch (err) {
    next(err)
  }
})

//verify exchange has been made
router.put('/:auctionId/verified', async (req, res, next) => {
  try {
    //Grab product thats being put up for auction, set status as closed auction
    //this is so that we can differentiate auctions later
    const auctionId = req.params.auctionId
    const auction = await Product.findByPk(auctionId)
    auction.status = 'auction (closed)'
    await auction.save();
    const selectedId = req.body.offerId
    const acceptedOffer =  await Product.findByPk(selectedId)
    //req.body should contin keyvalue pair of
    // {offerId: <productId>} of the accepted product
    //find the accepted offer product, return it from this request

    //update related offers in the auction table as accepted/rejected
    const offers = await Auction.findAll({
      where: {AuctionProductId: auctionId}
    })
    for(let idx in offers){
      if(offers[idx].productId === selectedId)
      { offers[idx].status = 'accepted' }
      else {
        offers[idx].status = 'rejected'
      }
      await offers[idx].save()
    }

    res.json(acceptedOffer)
  } catch (err) {
    next(err)
  }
})
