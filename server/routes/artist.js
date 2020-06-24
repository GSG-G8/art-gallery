const router = require('express').Router();
const { verifyArtist } = require('../controllers/middlewares/verifyUser');

const { getArtist, updateArtist } = require('../controllers');

router.get('/profile/:artistId', getArtist);
router.patch('/artist', verifyArtist, updateArtist);

module.exports = router;
