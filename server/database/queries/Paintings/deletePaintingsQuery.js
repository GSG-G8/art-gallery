const connection = require('../../connection');

const deletePaintingsQuery = (paintingId, artistId) =>
  connection.query({
    text: 'DELETE FROM painting WHERE id = $1 AND artist_id = $2',
    values: [paintingId, artistId],
  });

module.exports = deletePaintingsQuery;
