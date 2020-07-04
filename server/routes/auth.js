const router = require('express').Router();
const {
  auth: { registerController, login, logout, isAuth },
} = require('../controllers');

router.get('/is-auth', isAuth);
router.post('/sign-up', registerController);

router.post('/admin/login', login);

router.post('/login', login);

router.get('/logout', logout);

module.exports = router;
