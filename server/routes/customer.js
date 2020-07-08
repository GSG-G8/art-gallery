const router = require('express').Router();

const { updateUserInfo, getUserProfile } = require('../controllers');
const { verifyUser } = require('../controllers/middleware');
const { postCharge } = require('../controllers');

router.patch('/profile/customer', verifyUser, updateUserInfo);

router.get('/profile', verifyUser, getUserProfile);

router.post('/stripe/charge', postCharge);

module.exports = router;
