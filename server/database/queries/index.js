const {
  addArtist,
  getArtistByEmail,
  getArtistQuery,
  getArtists,
  switchActivateArtist,
} = require('./artists');

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

const { addCustomer, checkCustomerEmail } = require('./customers');
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
  getPaintingPrice,
  getCustomerBudget,
  updateBudgets,
  getAdminEmail,
  getArtists,
  switchActivateArtist,
  deletePaintingsQuery,
  getCustomerCarts,
  getPaintingCategory,
};
