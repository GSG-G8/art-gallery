const connection = require('../../connection');

const getCustomerProfile = (id) =>
  connection.query({
    text:
      'SELECT id,first_name,last_name,email,budget FROM customer WHERE id = $1',
    values: [id],
  });

module.exports = getCustomerProfile;
