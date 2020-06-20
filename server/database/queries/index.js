const { getPaintingsQuery, getPaintingsForUser } = require('./Paintings');
const { deletePaintingFromCart } = require('./cart');

module.exports = {
  getPaintingsQuery,
  deletePaintingFromCart,
  getPaintingsForUser,
};
