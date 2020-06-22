const router = require('express').Router();

const auth = require('./auth');
const paintings = require('./paintings');
const artist = require('./artist');

router.use(auth);
router.use(artist);
router.use(paintings);

module.exports = router;
