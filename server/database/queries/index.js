const {
  addArtist,
  getArtistByEmail,
  getArtistQuery,
  getArtists,
  switchActivateArtist,
} = require('./artists');

const {
  addCustomer,
  checkCustomerEmail,
  getCustomerProfile,
} = require('./customers');

const {
  getPaintingsQuery,
  getPaintingsForUser,
  getArtistPaintsQuery,
  deletePaintingsQuery,
  getPaintingCategory,
  addPaintingQuery,
} = require('./Paintings');

const {
  deletePaintingFromCart,
  checkCartQuery,
  postCartQuery,
  getCustomerCarts,
} = require('./cart');

const { getAdminEmail } = require('./admin');

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
  getCustomerProfile,
  getAdminEmail,
  getArtists,
  switchActivateArtist,
  deletePaintingsQuery,
  getCustomerCarts,
  getPaintingCategory,
};
