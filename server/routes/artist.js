const router = require('express').Router();

const { getArtist, getAllArtist, activateArtist } = require('../controllers');
const { protectedAdmin } = require('../middleware');

router.get('/profile/:artistId', getArtist);
router.get('/admin/artist', protectedAdmin, getAllArtist);
router.patch('/admin/artist/:artistId', protectedAdmin, activateArtist);

module.exports = router;
