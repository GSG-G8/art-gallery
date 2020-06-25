const router = require('express').Router();
const { verifyArtist } = require('../controllers/middleware');

const {
  getArtist,
  updateArtist,
  getAllArtist,
  activateArtist,
} = require('../controllers');
const { protectedAdmin } = require('../controllers/middleware');

router.get('/profile/:artistId', getArtist);
router.patch('/artist', verifyArtist, updateArtist);
router.get('/admin/artist', protectedAdmin, getAllArtist);
router.patch('/admin/artist/:artistId', protectedAdmin, activateArtist);

module.exports = router;
