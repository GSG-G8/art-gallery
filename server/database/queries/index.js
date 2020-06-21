const {
  getPaintingsQuery,
  getPaintingsForUser,
  getArtistPaintsQuery,
} = require('./Paintings');
const { deletePaintingFromCart } = require('./cart');
const { addArtist, getArtistByEmail } = require('./artists');
const { addCustomer, checkCustomerEmail } = require('./customers');

module.exports = {
  getPaintingsQuery,
  deletePaintingFromCart,
  getPaintingsForUser,
  getArtistPaintsQuery,
  addArtist,
  getArtistByEmail,
  addCustomer,
  checkCustomerEmail,
};
