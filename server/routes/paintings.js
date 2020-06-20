const router = require('express').Router();

const { getPaintings, getArtistPaints } = require('../controllers');

router.get('/paintings', getPaintings);
router.get('/paintings/:artistId', getArtistPaints);

module.exports = router;
