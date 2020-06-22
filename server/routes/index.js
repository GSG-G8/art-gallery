const router = require('express').Router();

const auth = require('./auth');
const paintings = require('./paintings');
const artist = require('./artist');
const cart = require('./cart');

router.use(auth);
router.use(artist);
router.use(cart);
router.use(paintings);

module.exports = router;
