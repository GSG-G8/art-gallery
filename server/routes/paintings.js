const router = require('express').Router();

const { getPaintings, getArtistPaints } = require('../controllers');

router.get('/paintings/:category', getPaintings);
router.get('/paintingsArtist/:artistId', getArtistPaints);

module.exports = router;
