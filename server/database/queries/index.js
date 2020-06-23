const {
  getPaintingsQuery,
  getPaintingsForUser,
  getArtistPaintsQuery,
  addPaintingQuery,
} = require('./Paintings');
const {
  deletePaintingFromCart,
  checkCartQuery,
  postCartQuery,
} = require('./cart');
const { addArtist, getArtistByEmail, getArtistQuery } = require('./artists');

const { addCustomer, checkCustomerEmail } = require('./customers');
const { getArtistReviews } = require('./review');

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
  addCustomer,
  checkCustomerEmail,
  getArtistQuery,
  getArtistReviews,
};
