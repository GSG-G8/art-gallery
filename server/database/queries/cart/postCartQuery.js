const connection = require('../../connection');

const checkCartQuery = (reqData) => {
  const { customerId, paintingId } = reqData;
  return connection.query({
    text: 'SELECT * FROM cart where customer_id = $1 AND painting_id = $2;',
    values: [customerId, paintingId],
  });
};

const postCartQuery = (reqData) => {
  const { customerId, paintingId } = reqData;
  return connection.query({
    text:
      'INSERT INTO cart (customer_id, painting_id) VALUES ($1, $2) RETURNING *;',
    values: [customerId, paintingId],
  });
};

module.exports = { checkCartQuery, postCartQuery };
