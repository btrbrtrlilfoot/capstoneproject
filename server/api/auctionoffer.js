const router = require("express").Router();
const { Product, User } = require("../db/models");
const sendSms = require("../twilio");

module.exports = router;

router.get("/:id", async (req, res, next) => {
  try {
    const auctionId = req.params.id;
    const auction = await Product.findOne({
      where: { id: auctionId },
      include: [
        { model: Product, as: "Offer", include: { model: User } },
        { model: User }
      ]
    });
    res.json(auction);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const auctionId = req.params.id;
    const selectedId = req.body.offerId;
    const products = await Product.findOne({
      where: { id: auctionId },
      include: [{ model: Product, as: "Offer" }, { model: User }]
    });
    products.type = "auction (closed)";
    products.save();
    for (let idx in products.Offer) {
      let product = products.Offer[idx];
      if (product.id === selectedId) {
        product.offer.status = "accepted";
        let user = await products.Offer[idx].getUser();
        await sendSms(
          user.phoneNumber,
          `Congrats! Your offer of ${product.name} on ${
            products.name
          } has been accepted! You may contact ${products.user.name} at ${
            products.user.email
          } or ${products.user.phoneNumber}. Happy Bartering!`
        );
      } else {
        product.offer.status = "rejected";
      }
      await product.offer.save();
    }

    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/verified", async (req, res, next) => {
  try {
    const auctionId = req.params.id;
    const products = await Product.findOne({
      where: { id: auctionId },
      include: {
        model: Product,
        as: "Offer",
        through: { where: { status: "accepted" } }
      }
    });
    products.Offer[0].offer.status = "successful";
    products.Offer[0].offer.save();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const auctionId = req.params.id;
    const products = await Product.findOne({
      where: { id: auctionId },
      include: { model: Product, as: "Offer" }
    });
    while (products.Offer.length > 0) {
      const offer = products.Offer.pop();
      await offer.destroy();
    }
    await products.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
