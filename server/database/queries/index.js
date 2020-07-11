const {
  addArtist,
  getArtistByEmail,
  getArtistQuery,
  updateArtistQuery,
  switchActivateArtist,
  updateAvatarQuery,
  getArtists,
} = require('./artists');

const {
  addCustomer,
  checkCustomerEmail,
  getCustomerProfile,
  updateCustomer,
  editCustomerBudget,
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
  getPaintQuery,
} = require('./Paintings');
const {
  deletePaintingFromCart,
  checkCartQuery,
  postCartQuery,
  getCustomerCarts,
} = require('./cart');

const { getArtistReviews } = require('./review');
const { getAdminEmail, getAdminBudget } = require('./admin');

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
  updateAvatarQuery,
  updateCustomer,
  addReview,
  getPaintQuery,
  getAdminBudget,
  editCustomerBudget,
};
