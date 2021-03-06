const router = require('express').Router();
const auth = require('./auth');
const paintings = require('./paintings');
const cart = require('./cart');
const review = require('./review');
const artist = require('./artist');
const customer = require('./customer');

router.use(auth);
router.use(artist);
router.use(customer);
router.use(cart);
router.use(review);
router.use(paintings);

module.exports = router;
