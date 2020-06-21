const router = require('express').Router();
const {
  auth: { registerController, login },
} = require('../controllers');

router.post('/sign-up', registerController);

router.post('/login', login);

module.exports = router;
