const connection = require('../connection');

exports.addReview = (artistID, customerID, rate, details) =>
  connection.query({
    text:
      'INSERT INTO feedback (artist_id,customer_id,rate,details) VALUES ($1,$2,$3,$4) RETURNING *;',
    values: [artistID, customerID, rate, details],
  });
exports.getArtistReviews = (artistID) =>
  connection.query({
    text:
      'SELECT f.id, f.rate, f.details, f.review_date, c.first_name, c.last_name FROM feedback f INNER JOIN customer c ON f.customer_id = c.id WHERE f.artist_id= $1',
    values: [artistID],
  });
