const connection = require('../../connection');

const getPaintingQuery = (id) =>
  connection.query({
    text: 'SELECT * FROM painting WHERE id = $1',
    values: [id],
  });

module.exports = getPaintingQuery;
