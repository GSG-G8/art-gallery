const {
  addArtist,
  getArtistByEmail,
  getArtistQuery,
  updateArtistQuery,
  switchActivateArtist,
  getArtists,
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

const { getArtistReviews } = require('./review');
const { getAdminEmail } = require('./admin');

const { addReview } = require('./review');

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
  getArtistReviews,
  getCustomerProfile,
  getAdminEmail,
  getArtists,
  switchActivateArtist,
  deletePaintingsQuery,
  getCustomerCarts,
  getPaintingCategory,
  addReview,
};
