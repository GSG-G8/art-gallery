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
router.delete('/paintings/:id', verifyArtist, deletePainting);

router.get('/paintingsArtist/:artistId', getArtistPaints);

router.post('/painting', verifyArtist, addPainting);

module.exports = router;
