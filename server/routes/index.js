const router = require('express').Router();

const auth = require('./auth');
const paintings = require('./paintings');
const artist = require('./artist');
const cart = require('./cart');
const review = require('./review');

router.use(auth);
router.use(artist);
router.use(cart);
router.use(review);
router.use(paintings);
router.use(cart);

module.exports = router;
