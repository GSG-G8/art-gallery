const connection = require('../../connection');

const getArtistByEmail = (email) =>
  connection.query({
    text: `SELECT * FROM artist WHERE email=$1;`,
    values: [email],
  });

module.exports = getArtistByEmail;
