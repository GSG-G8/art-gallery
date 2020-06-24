const {
  addArtist,
  getArtistByEmail,
  getArtistQuery,
  updateArtistQuery,
} = require('./artists');

const {
  getPaintingsQuery,
  getArtistPaintsQuery,
  getPaintingCategory,
  getPaintingsForUser,
  addPaintingQuery,
  deletePaintingsQuery,
} = require('./Paintings');
const {
  deletePaintingFromCart,
  checkCartQuery,
  postCartQuery,
  getCustomerCarts,
} = require('./cart');

const { addCustomer, checkCustomerEmail } = require('./customers');

module.exports = {
  getPaintingsQuery,
  deletePaintingFromCart,
  getPaintingsForUser,
  checkCartQuery,
  postCartQuery,
  getArtistPaintsQuery,
  addPaintingQuery,
  addArtist,
  getArtistByEmail,
  getArtistQuery,
  addCustomer,
  checkCustomerEmail,
  updateArtistQuery,
  deletePaintingsQuery,
  getCustomerCarts,
  getPaintingCategory,
};
