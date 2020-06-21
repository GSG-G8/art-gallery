const router = require('express').Router();

const auth = require('./auth');
const paintings = require('./paintings');
const artist = require('./artist');

router.use(auth);
router.use(paintings);
router.use(artist);

module.exports = router;
