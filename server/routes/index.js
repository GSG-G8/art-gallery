const router = require('express').Router();

const auth = require('./auth');
const paintings = require('./paintings');
const artist = require('./artist');
const cart = require('./cart');

router.use(auth);
router.use(paintings);
router.use(artist);
router.use(cart);

module.exports = router;
