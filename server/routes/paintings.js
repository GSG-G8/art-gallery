const router = require('express').Router();

const {
  getPaintings,
  getArtistPaints,
  deletePainting,
  addPainting,
} = require('../controllers');
const { verifyArtist } = require('../controllers/middleware');

router.get('/paintings/:category', getPaintings);
router.get('/paintings/:artistId', getArtistPaints);
router.delete('/paintings/:id', deletePainting);

router.get('/paintingsArtist/:artistId', getArtistPaints);

// Only artist endPoints
router.use(verifyArtist);

router.post('/painting', addPainting);

module.exports = router;
