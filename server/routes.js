const router = require('express').Router();

const { registerValidation } = require('./utils/validation');
const { register } = require('./controllers');

router.post('/register', registerValidation, register.registerController);

module.exports = router;
