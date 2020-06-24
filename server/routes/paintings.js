const router = require('express').Router();

const {
  getPaintings,
  getArtistPaints,
  buyPaintings,
  addPainting,
} = require('../controllers');
const { verifyArtist } = require('../controllers/middlewares/verifyUser');

router.get('/paintings', getPaintings);
router.get('/paintings/:artistId', getArtistPaints);
router.post('/paintings/buy', buyPaintings);

// Only artist endPoints
router.use(verifyArtist);

router.post('/painting', addPainting);

module.exports = router;
