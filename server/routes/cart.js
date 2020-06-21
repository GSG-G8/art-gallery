const router = require('express').Router();

const { addPaintingToCart } = require('../controllers');

router.post('/cart', addPaintingToCart);

module.exports = router;
