const connection = require('../../connection');

const getCustomerCarts = (customerID) =>
  connection.query({
    text: 'SELECT * FROM cart WHERE customer_id = $1',
    values: [customerID],
  });

module.exports = getCustomerCarts;
