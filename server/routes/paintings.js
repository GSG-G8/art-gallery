const router = require('express').Router();

const {
  getPaintings,
  getArtistPaints,
  buyPaintings,
} = require('../controllers');

router.get('/paintings', getPaintings);
router.get('/paintings/:artistId', getArtistPaints);
router.post('/buy/:productId', buyPaintings);

module.exports = router;
