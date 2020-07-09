const connection = require('../../connection');

const getPaintingsForUser = (cId) =>
  connection.query({
    text: 'SELECT * FROM cart WHERE customer_id=$1',
    values: [cId],
  });

module.exports = getPaintingsForUser;
