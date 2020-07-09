const router = require('express').Router();

const { updateUserInfo, getUserProfile } = require('../controllers');
const { verifyUser } = require('../controllers/middleware');

router.patch('/profile/customer', verifyUser, updateUserInfo);

router.get('/profile', verifyUser, getUserProfile);

module.exports = router;
