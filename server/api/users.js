const router = require("express").Router();
const { User } = require("../db/models");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({});
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});
router.put("/", async (req, res, next) => {
  try {
    console.log("reqpara", req.body);
    const user = await User.findOne({
      where: {
        id: req.body.id
      }
    });

    user.imageUrl = req.body.imageUrl;
    user.name = req.body.name;
    user.email = req.body.email;
    console.log("user backend", user);

    user.save();
    res.send(user);
  } catch (error) {}
});
router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.user.id
      }
    });
    if (user) {
      res.json(user);
    } else {
      res.json(null);
    }
  } catch (err) {
    next(err);
  }
});
