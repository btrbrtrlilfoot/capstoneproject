const router = require('express').Router();
const { User, Product } = require('../db/models');

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    res.send(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const product = await Product.create({
      name: req.body.name,
      kind: req.body.kind,
      type: req.body.type
    });

    res.send(product);
  } catch (error) {
    next(error);
  }
});

router.put('/', async (req, res, next) => {
  try {
    const product = await Product.update(req.body);
    res.send(product);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    await Product.destroy({ where: { id: id } });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
