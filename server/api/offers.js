const router = require("express").Router();
const { User, Offer, Product } = require("../db/models");

//get all offers on an auction
router.get("/:auctionId", async (req, res, next) => {
  try {
    const auctionId = req.params.auctionId;
    const product = await Product.findByPk(auctionId, {
      include: { model: Product, as: "Offer" }
    });
    res.send(product.Offer);
  } catch (err) {
    next(err);
  }
});

router.post("/:auctionId", async (req, res, next) => {
  // create a new offer
  try {
    const auctionProduct = await Product.findByPk(req.params.auctionId);
    const product = await Product.create({
      name: req.body.name,
      kind: req.body.kind,
      type: "offer"
    });

    const offer = await auctionProduct.addOffer(product, {
      through: { status: "pending" }
    });

    res.send(offer);
  } catch (error) {
    next(error);
  }
});

//verify exchange has been made
router.put("/:auctionId/:offerId", async (req, res, next) => {
  try {
    const auctionId = req.params.auctionId;
    const offerId = req.params.offerId;

    const offer = await Offer.findOne({
      where: {
        productId: auctionId,
        OfferId: offerId
      }
    });

    offer.status = req.body.status;
    res.send(offer);
  } catch (error) {
    next(error);
  }
});

router.delete("/:auctionId/:offerId", async (req, res, next) => {
  try {
    const auctionId = req.params.auctionId;
    const offerId = req.params.offerId;

    const offer = await Offer.findOne({
      where: {
        productId: auctionId,
        OfferId: offerId
      }
    });
    if (offer) {
      await offer.destroy();
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
