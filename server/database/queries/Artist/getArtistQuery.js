const connection = require('../../connection');

const getArtistQuery = (id) =>
  connection.query({
    text: 'SELECT * FROM artist WHERE id = $1',
    values: [id],
  });

module.exports = getArtistQuery;
