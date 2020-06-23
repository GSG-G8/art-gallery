const getPaintingsQuery = require('./getPaintingsQuery');
const getPaintingsForUser = require('./getPaintingsUser');
const addPaintingQuery = require('./addPainting');
const getArtistPaintsQuery = require('./getArtistPaintsQuery');
const getPaintingCategory = require('./getPaintingCategory');

module.exports = {
  getPaintingsQuery,
  getPaintingsForUser,
  getArtistPaintsQuery,
  getPaintingCategory,
  addPaintingQuery,
};
