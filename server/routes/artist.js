const router = require('express').Router();

const { getArtist } = require('../controllers');

router.get('/profile/:artistId', getArtist);

module.exports = router;
