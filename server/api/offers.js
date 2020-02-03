const router = require('express').Router();
const {User, Auction, Product} = require('../db/models')


router.get('/:auctionId', async (req, res, next) => {
  try {
    const auctionId = req.params.auctionId
    const offers = await Auction.findAll({
      where: {AuctionProductId: auctionId}
    })
    res.json(products)
  } catch (err) {
    next(err)
  }
})

// router.get('/:auctionId', async (req, res, next) => {
//   // get all offers for an auction
// });

router.get('/:id', async (req, res, next) => {
  // get one offer
});

router.post('/', async (req, res, next) => {
    // create a new offer
});

//verify exchange has been made
router.put('/:id', async (req, res, next) => {});

router.delete('/:id', async (req, res, next) => {});

module.exports = router;
