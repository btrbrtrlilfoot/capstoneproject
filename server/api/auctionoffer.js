const router = require("express").Router();
const { User, Auction, Product } = require("../db/models");
const { Op } = require("sequelize");

module.exports = router;

//get offers associated with an auction productid
router.get("/:id", async (req, res, next) => {
  try {
    const auctionId = req.params.id;
    const auction = await Product.findOne({
      where: { id: auctionId },
      include: { model: Product, as: "Offer" }
    }); //Base eagerloading. Returns the Auction Product and Offers in an array under the key: Offer
    console.log("u made it");
    res.json(auction);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    console.log("this is in req.bodyy", req.body);
    const auctionId = req.params.id;
    const selectedId = req.body.offerId;
    const products = await Product.findOne({
      where: { id: auctionId },
      include: { model: Product, as: "Offer" }
    });
    products.type = "auction (closed)"; //updates an auction as closed, necessary for differentiating auction states.
    products.save();
    for (let idx in products.Offer) {
      //search for accepted offer based on offerId sent in body, updates entire array of offers
      if (products.Offer[idx].id === selectedId) {
        products.Offer[idx].offer.status = "accepted";
      } else {
        products.Offer[idx].offer.status = "rejected";
      }
      await products.Offer[idx].offer.save();
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
    res.send("Auction Has Been Deleted. All Offers Are Gone");
  } catch (err) {
    next(err);
  }
});
