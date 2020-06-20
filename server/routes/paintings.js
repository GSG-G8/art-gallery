const router = require('express').Router();

const { getPaintings, addPainting } = require('../controllers');
const { verifyArtist } = require('../controllers/middlewares/verifyUser');

router.get('/paintings', getPaintings);

// Only artist endPoints
router.use(verifyArtist);

router.post('/painting', addPainting);

module.exports = router;
