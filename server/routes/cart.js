const router = require('express').Router();
const { deletePantingCart, addPaintingToCart } = require('../controllers');
const { verifyUser } = require('../controllers/middleware');

router.delete('/cart/:paintingsId', verifyUser, deletePantingCart);
router.post('/cart', verifyUser, addPaintingToCart);

module.exports = router;
