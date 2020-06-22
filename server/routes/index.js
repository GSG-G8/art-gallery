const router = require('express').Router();

const auth = require('./auth');
const paintings = require('./paintings');
const artist = require('./artist');
const customer = require('./customer');

router.use(auth);
router.use(paintings);
router.use(artist);
router.use(customer);

module.exports = router;
