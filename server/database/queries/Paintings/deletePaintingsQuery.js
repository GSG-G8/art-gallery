const connection = require('../../connection');

const deletePaintingsQuery = (paintingId) =>
  connection.query('DELETE FROM painting WHERE id = $1', [paintingId]);

module.exports = deletePaintingsQuery;
