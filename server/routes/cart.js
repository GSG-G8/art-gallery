const router = require('express').Router();
const { verifyUser } = require('../controllers/middleware');
const { deletePantingCart, addPaintingToCart } = require('../controllers');

const { getCart } = require('../controllers');

router
  .get('/cart', verifyUser, getCart)
  .post('/cart', verifyUser, addPaintingToCart);

router.delete('/cart/:paintingsId', verifyUser, deletePantingCart);

module.exports = router;
