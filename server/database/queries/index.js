const {
  getPaintingsQuery,
  getArtistPaintsQuery,
  getPaintingCategory,
  getPaintingsForUser,
  addPaintingQuery,
} = require('./Paintings');
const { addArtist, getArtistByEmail, getArtistQuery } = require('./artists');
const {
  deletePaintingFromCart,
  checkCartQuery,
  postCartQuery,
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
  addCustomer,
  checkCustomerEmail,
  getPaintingCategory,
  getArtistQuery,
};
