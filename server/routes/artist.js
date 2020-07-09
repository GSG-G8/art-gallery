const router = require('express').Router();
const { verifyArtist } = require('../controllers/middleware');
const {
  getArtist,
  getAllArtist,
  updateArtist,
  activateArtist,
  updateArtistAvatar,
  getAdminData,
} = require('../controllers');
const { protectedAdmin } = require('../controllers/middleware');

router.get('/profile/:artistId', getArtist);
router.patch('/artist', verifyArtist, updateArtist);
router.get('/artists', getAllArtist);
router.get('/admin', getAdminData);
router.patch('/admin/artist/:artistId', protectedAdmin, activateArtist);
router.patch('/artist/avatar', verifyArtist, updateArtistAvatar);

module.exports = router;
