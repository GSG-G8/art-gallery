const { addArtist, getArtistByEmail, getArtistQuery } = require('./artists');

const {
  getPaintingsQuery,
  getArtistPaintsQuery,
  getPaintingCategory,
  getPaintingsForUser,
  addPaintingQuery,
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
  getCustomerCarts,
  getPaintingCategory,
};
