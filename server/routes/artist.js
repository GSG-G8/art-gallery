const router = require('express').Router();

const { verifyArtist } = require('../controllers/middleware');
const {
  getArtist,
  getAllArtist,
  activateArtist,
  updateArtistAvatar,
} = require('../controllers');
const { protectedAdmin } = require('../middleware');

router.get('/profile/:artistId', getArtist);
router.get('/admin/artist', protectedAdmin, getAllArtist);
router.patch('/admin/artist/:artistId', protectedAdmin, activateArtist);
router.patch('/artist/avatar', verifyArtist, updateArtistAvatar);

module.exports = router;
