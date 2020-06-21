const router = require('express').Router();

const paintings = require('./paintings');
const artist = require('./artist');

router.use(paintings);
router.use(artist);

module.exports = router;
