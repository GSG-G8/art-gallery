const connection = require('../../connection');

const getUserByEmail = (email) =>
  connection.query({
    text: `SELECT * FROM customer WHERE email=$1;`,
    values: [email],
  });

module.exports = getUserByEmail;
