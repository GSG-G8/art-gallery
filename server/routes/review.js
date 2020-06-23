const router = require('express').Router();

const { getArtistReview } = require('../controllers');

router.get('/review/:artistID', getArtistReview);

module.exports = router;
