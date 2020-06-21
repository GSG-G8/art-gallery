const router = require('express').Router();
const { verifyUser } = require('../controllers/middlewares/verifyUser');

const { getCart } = require('../controllers');

router.use(verifyUser);

router.get('/cart', getCart);

module.exports = router;
