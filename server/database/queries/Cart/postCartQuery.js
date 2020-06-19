const connection = require('../../connection');

const postCartQuery = (reqData) => {
  const { customerId, paintingId } = reqData;
  return connection.query({
    text:
      'INSERT INTO cart (customer_id, painting_id) VALUES ($1, $2) RETURNING *;',
    values: [customerId, paintingId],
  });
};

module.exports = postCartQuery;
