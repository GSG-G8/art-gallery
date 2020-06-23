const getPaintingsQuery = require('./getPaintingsQuery');
const getPaintingsForUser = require('./getPaintingsUser');
const addPaintingQuery = require('./addPainting');
const getArtistPaintsQuery = require('./getArtistPaintsQuery');
const deletePaintingsQuery = require('./deletePaintingsQuery');
const getPaintingCategory = require('./getPaintingCategory');

module.exports = {
  getPaintingsQuery,
  getPaintingsForUser,
  getArtistPaintsQuery,
  deletePaintingsQuery,
  getPaintingCategory,
  addPaintingQuery,
};
