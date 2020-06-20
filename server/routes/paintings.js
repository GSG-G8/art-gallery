const router = require('express').Router();

const {
  getPaintings,
  addPainting,
  getArtistPaints,
} = require('../controllers');
const { verifyArtist } = require('../controllers/middlewares/verifyUser');

router.get('/paintings', getPaintings);
router.get('/paintings/:artistId', getArtistPaints);

// Only artist endPoints
router.use(verifyArtist);

router.post('/painting', addPainting);

module.exports = router;
