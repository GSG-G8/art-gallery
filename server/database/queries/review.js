const connection = require('../connection');

exports.getArtistReviews = (artistID) =>
  connection.query({
    text: 'SELECT * FROM feedback WHERE artist_id= $1',
    values: [artistID],
  });
