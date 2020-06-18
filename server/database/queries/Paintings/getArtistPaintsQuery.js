const connection = require('../../connection');

const getArtistPaintsQuery = (artistId) =>
  connection.query('SELECT * FROM painting WHERE artist_id = $1', [artistId]);

module.exports = getArtistPaintsQuery;
