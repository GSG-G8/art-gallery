const router = require('express').Router();

const { registerController } = require('../controllers');

router.post('/register', registerController);

module.exports = router;
