const router = require('express').Router();

const { verifyUser } = require('../controllers/middlewares/verifyUser');
const { addPaintingToCart } = require('../controllers');

router.post('/cart', verifyUser, addPaintingToCart);

module.exports = router;
