const connection = require('../../connection');

const getArtistQuery = (id) =>
  connection.query('SELECT * FROM artist WHERE id = $1', [id]);

module.exports = getArtistQuery;
