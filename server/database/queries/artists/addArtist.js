const connection = require('../../connection');

const addArtist = ({ email, firstName, lastName, password, customized }) =>
  connection.query({
    text:
      'INSERT INTO artist(first_name, last_name, email,password,customized) VALUES ($1, $2, $3, $4,$5) returning id,first_name,email',
    values: [firstName, lastName, email, password, customized],
  });
module.exports = addArtist;
