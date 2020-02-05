const router = require("express").Router();
const { User, Product } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: {
        type: "auction (open)"
      },
      include: [{ model: User }]
    });
    console.log("products", products[0].user.location);
    console.log("reqqquser", req.user.location);
    let city = req.user.location;
    console.log("????", city);
    let result = products.filter(product => product.user.location == city);
    res.send(result);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    res.send(product);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const product = await Product.create({
      name: req.body.item,
      location: req.body.location,
      description: req.body.description,
      type: "auction (open)",
      userId: req.session.passport.user
    });

    res.send(product);
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const product = await Product.update(req.body);
    res.send(product);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    await Product.destroy({ where: { id: id } });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
