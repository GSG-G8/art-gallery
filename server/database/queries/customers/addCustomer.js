const connection = require('../../connection');

const addCustomer = ({ email, firstName, lastName, password }) =>
  connection.query({
    text:
      'INSERT INTO customer(first_name, last_name, email,password) VALUES ($1, $2, $3, $4) returning id,first_name,email',
    values: [firstName, lastName, email, password],
  });
module.exports = addCustomer;
