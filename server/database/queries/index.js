const {
  getPaintingsQuery,
  getPaintingsForUser,
  getArtistPaintsQuery,
} = require('./Paintings');
const { deletePaintingFromCart } = require('./cart');

module.exports = {
  getPaintingsQuery,
  deletePaintingFromCart,
  getPaintingsForUser,
  getArtistPaintsQuery,
};
