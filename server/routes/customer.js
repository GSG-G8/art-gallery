const router = require('express').Router();

const { getUserProfile } = require('../controllers');
const { verifyUser } = require('../controllers/middleware');

router.get('/profile', verifyUser, getUserProfile);

module.exports = router;
