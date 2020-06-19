const router = require('express').Router();
const { auth } = require('../controllers');

router.post('/register', auth.registerController);

router.post('/login', auth.login);

module.exports = router;
