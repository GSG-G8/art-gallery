const { getPaintingsQuery, getArtistPaintsQuery } = require('./Paintings');
const { checkCartQuery, postCartQuery } = require('./Cart');

module.exports = {
  getPaintingsQuery,
  checkCartQuery,
  postCartQuery,
  getArtistPaintsQuery,
};
