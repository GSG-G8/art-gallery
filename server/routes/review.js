const router = require('express').Router();

const { addReview } = require('../controllers');
const { verifyUser } = require('../controllers/middleware');

router.post('/review', verifyUser, addReview);

module.exports = router;
