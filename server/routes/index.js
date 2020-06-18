const router = require('express').Router();

const paintings = require('./paintings');

router.use(paintings);

module.exports = router;
