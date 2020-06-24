const router = require('express').Router();

const { updateUserInfo } = require('../controllers');
const { verifyUser } = require('../controllers/middleware');

router.patch('/profile/customer', verifyUser, updateUserInfo);

module.exports = router;
