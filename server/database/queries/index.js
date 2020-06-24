const { addArtist, getArtistByEmail, getArtistQuery } = require('./artists');
const {
  addCustomer,
  checkCustomerEmail,
  getCustomerProfile,
} = require('./customers');

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
  deletePaintingsQuery,
  getCustomerCarts,
  getPaintingCategory,
};
