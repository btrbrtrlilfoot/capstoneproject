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
