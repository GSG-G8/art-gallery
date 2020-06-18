const connection = require('../../connection');

const getArtistPaintsQuery = (artistId) =>
  connection.query({
    text: 'SELECT * FROM painting WHERE artist_id = $1',
    values: [artistId],
  });

module.exports = getArtistPaintsQuery;
