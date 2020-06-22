const connection = require('../../connection');

const deletePaintingsQuery = (paintingId) =>
  connection.query({
    text: 'DELETE FROM painting WHERE id = $1',
    values: [paintingId],
  });

module.exports = deletePaintingsQuery;
