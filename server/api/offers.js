const router = require("express").Router();
const { Offer, Product, User } = require("../db/models");

router.get("/:auctionId", async (req, res, next) => {
  try {
    const auctionId = req.params.auctionId;
    const product = await Product.findByPk(auctionId, {
      include: { model: Product, as: "Offer", include: { model: User } }
    });
    res.send(product.Offer);
  } catch (err) {
    next(err);
  }
});

router.post("/:auctionId", async (req, res, next) => {
  try {
    const auctionProduct = await Product.findByPk(req.params.auctionId);
    const product = await Product.create({
      name: req.body.name,
      kind: req.body.kind,
      description: req.body.description,
      imageUrl: req.body.imageUrl || "product-default.jpg",
      type: "offer"
    });

    if (req.user) {
      product.setUser(req.user);
    }

    const offer = await auctionProduct.addOffer(product, {
      through: { status: "pending" }
    });

    res.send(offer);
  } catch (error) {
    next(error);
  }
});

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
