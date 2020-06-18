const router = require('express').Router();

const { registerValidation } = require('./utils/validation');
const { registerController } = require('./controllers');

router.post('/register', registerValidation, registerController);

module.exports = router;
