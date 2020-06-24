const deletePaintingFromCart = require('./deletePaintingFromCart');
const { checkCartQuery, postCartQuery } = require('./postCartQuery');
const getCustomerCarts = require('./getCart');

module.exports = {
  checkCartQuery,
  postCartQuery,
  deletePaintingFromCart,
  getCustomerCarts,
};
