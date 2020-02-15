const router = require("express").Router();
const { Product, User } = require("../db/models");
const sendSms = require("../twilio");

module.exports = router;

//get offers associated with an auction productid
router.get("/:id", async (req, res, next) => {
  try {
    const auctionId = req.params.id;
    const auction = await Product.findOne({
      where: { id: auctionId },
      include: [
        { model: Product, as: "Offer", include: { model: User } },
        { model: User }
      ]
    }); //Base eagerloading. Returns the Auction Product and Offers in an array under the key: Offer
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
    products.type = "auction (closed)"; //updates an auction as closed, necessary for differentiating auction states.
    products.save();
    console.log("this is auction owner", products.user);
    for (let idx in products.Offer) {
      //search for accepted offer based on offerId sent in body, updates entire array of offers
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

//verify exchange has been made
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
    }); //only returns an array with the accepted offer product and the auction product
    products.Offer[0].offer.status = "successful";
    products.Offer[0].offer.save();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

//delete auction and related offers
router.delete("/:id", async (req, res, next) => {
  try {
    const auctionId = req.params.id;
    const products = await Product.findOne({
      where: { id: auctionId },
      include: { model: Product, as: "Offer" }
    });
    while (products.Offer.length > 0) {
      //deletes products in array related to auction product
      const offer = products.Offer.pop();
      await offer.destroy();
    }
    await products.destroy(); //deletes product
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
