const connection = require('../connection');

exports.addReview = (artistID, customerID, rate, details) =>
  connection.query({
    text:
      'INSERT INTO feedback (artist_id,customer_id,rate,details) VALUES ($1,$2,$3,$4) RETURNING *;',
    values: [artistID, customerID, rate, details],
  });

exports.getArtistReviews = (artistID) =>
  connection.query({
    text: 'SELECT * FROM feedback WHERE artist_id= $1',
    values: [artistID],
  });
