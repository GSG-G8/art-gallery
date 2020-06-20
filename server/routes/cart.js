const router = require('express').Router();

const { postCart } = require('../controllers');

router.post('/cart', postCart);

module.exports = router;
