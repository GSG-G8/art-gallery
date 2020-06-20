const router = require('express').Router();

const auth = require('./auth');
const paintings = require('./paintings');
const cart = require('./cart');

router.use(auth);
router.use(paintings);
router.use(cart);

module.exports = router;
