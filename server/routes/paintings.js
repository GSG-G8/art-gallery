const router = require('express').Router();

const {
  getPaintings,
  getArtistPaints,
  deletePainting,
} = require('../controllers');

router.get('/paintings', getPaintings);
router.get('/paintings/:artistId', getArtistPaints);
router.delete('/paintings/:id', deletePainting);

module.exports = router;
