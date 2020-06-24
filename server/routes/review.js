const router = require('express').Router();

const { addReview, getArtistReview } = require('../controllers');
const { verifyUser } = require('../controllers/middleware');

router.post('/review', verifyUser, addReview);
router.get('/review/:artistID', getArtistReview);

module.exports = router;
