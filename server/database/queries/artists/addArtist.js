const connection = require('../../connection');

const addArtist = ({ email, firstName, lastName, password }) =>
  connection.query({
    text:
      'INSERT INTO artist(first_name, last_name, email,password) VALUES ($1, $2, $3, $4) returning id,first_name,email',
    values: [firstName, lastName, email, password],
  });
module.exports = addArtist;
