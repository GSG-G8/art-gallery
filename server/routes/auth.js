const router = require('express').Router();
const {
  auth: { registerController, login, logout },
} = require('../controllers');

router.post('/sign-up', registerController);

router.post('/login', login);

router.get('/logout', logout);

module.exports = router;
