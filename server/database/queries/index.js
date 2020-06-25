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
  updateCustomer,
} = require('./customers');

const {
  getPaintingsQuery,
  getPaintingsForUser,
  getArtistPaintsQuery,
  getPaintingPrice,
  getCustomerBudget,
  deletePaintingsQuery,
  getPaintingCategory,
  addPaintingQuery,
  updateBudgets,
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
  getPaintingPrice,
  getCustomerBudget,
  updateBudgets,
  getArtistReviews,
  getCustomerProfile,
  getAdminEmail,
  getArtists,
  switchActivateArtist,
  deletePaintingsQuery,
  getCustomerCarts,
  getPaintingCategory,
  updateCustomer,
  addReview,
};
