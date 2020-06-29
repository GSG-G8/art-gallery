const router = require('express').Router();

const {
  getPaintings,
  getArtistPaints,
  buyPaintings,
  deletePainting,
  addPainting,
} = require('../controllers');
const { verifyArtist, verifyUser } = require('../controllers/middleware');
const sendMail = require('../controllers/middleware/mail');

router.get('/paintings/:category', getPaintings);
router.get('/paintings/:artistId', getArtistPaints);
router.post('/paintings/buy', verifyUser, buyPaintings);
router.delete('/paintings/:paintingId', verifyArtist, deletePainting);

router.get('/paintingsArtist/:artistId', getArtistPaints);

router.post('/painting', verifyArtist, addPainting);

router.post('/mail', sendMail);
module.exports = router;
