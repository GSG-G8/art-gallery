const router = require('express').Router();

const { getPaintings, deletePainting } = require('../controllers');

router.get('/paintings', getPaintings);
router.delete('/paintings/:id', deletePainting);

module.exports = router;
