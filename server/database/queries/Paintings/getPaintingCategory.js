const connection = require('../../connection');

const getPaintingsQuery = (category) =>
  connection.query({
    text: 'SELECT * FROM painting WHERE category=$1',
    values: [category],
  });
module.exports = getPaintingsQuery;
