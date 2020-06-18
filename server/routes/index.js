const router = require('express').Router();

const paintings = require('./paintings');
const auth = require('./auth');

router.use(paintings);
router.use(auth);

module.exports = router;
