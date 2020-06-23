const router = require('express').Router();

const { addReview } = require('../controllers');

router.post('/review', addReview);

module.exports = router;
