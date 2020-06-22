const connection = require('../../connection');

const getCustomerByEmail = (email) =>
  connection.query({
    text: `SELECT * FROM customer WHERE email=$1;`,
    values: [email],
  });

module.exports = getCustomerByEmail;
