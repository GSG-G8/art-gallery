const connection = require('../../connection');

const deletePaintingsFromCart = (cId, pId) =>
  connection.query({
    text:
      'DELETE FROM cart WHERE customer_id=$1 and painting_id=$2 returning id',
    values: [cId, pId],
  });

module.exports = deletePaintingsFromCart;
