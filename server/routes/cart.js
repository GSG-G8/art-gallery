const router = require('express').Router();

const { postCart } = require('../controllers');

router.get('/cart', postCart);

module.exports = router;
