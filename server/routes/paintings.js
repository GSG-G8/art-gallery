const router = require('express').Router();

const { getPaintings } = require('../controllers');

router.get('/paintings', getPaintings);

module.exports = router;
