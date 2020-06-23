const connection = require('../../connection');

const getCustomerCarts = (customerID) =>
  connection.query({
    text:
      'SELECT cart.id,cart.painting_id, painting.title, painting.img, painting.description, painting.category, painting.property, painting.artist_id FROM cart INNER JOIN painting ON cart.painting_id = painting.id WHERE cart.customer_id = $1',
    values: [customerID],
  });

module.exports = getCustomerCarts;
