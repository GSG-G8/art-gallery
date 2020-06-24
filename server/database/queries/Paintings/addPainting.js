const connection = require('../../connection');

const addPaintingQuery = (title, img, desc, cat, prop, id) =>
  connection.query({
    text:
      'INSERT INTO painting (title, img, description, category, property, artist_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;',
    values: [title, img, desc, cat, prop, id],
  });

module.exports = addPaintingQuery;
