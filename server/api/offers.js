const router = require('express').Router();

router.get('/:auctionId', async (req, res, next) => {
  // get all offers for an auction
});

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
