const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/auctions', require('./auctionoffer'));
router.use('/offers', require('./offers'));
router.use('/products', require('./products'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});