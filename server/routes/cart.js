const router = require('express').Router();
const {
  cart: { deletePantingCart },
} = require('../controllers');

router.delete('/cart/:paintingsId', deletePantingCart);

module.exports = router;
