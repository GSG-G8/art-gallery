const router = require('express').Router();

const auth = require('./auth');
const paintings = require('./paintings');

router.use(auth);
router.use(paintings);

module.exports = router;
