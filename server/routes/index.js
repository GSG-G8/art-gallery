const router = require('express').Router();

const paintings = require('./paintings');
const Artist = require('./artist');

router.use(paintings);
router.use(Artist);

module.exports = router;
