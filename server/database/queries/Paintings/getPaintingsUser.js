const connection = require('../../connection');

const getPaintingsForUser = (cId, pId) =>
  connection.query({
    text: 'SELECT * FROM cart WHERE customer_id=$1 and painting_id=$2',
    values: [cId, pId],
  });

module.exports = getPaintingsForUser;
