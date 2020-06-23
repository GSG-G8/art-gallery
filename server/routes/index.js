const router = require('express').Router();
const auth = require('./auth');
const paintings = require('./paintings');
const cart = require('./cart');
const artist = require('./artist');
const review = require('./review');

router.use(auth);
router.use(artist);
router.use(cart);
router.use(review);
router.use(paintings);

module.exports = router;
