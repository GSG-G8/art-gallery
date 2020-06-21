const connection = require('../../connection');

const getArtistQuery = (id) =>
  connection.query({
    text:
      'SELECT id,first_name,last_name,email,mobile_no,customized,reviews,profile_img,social_media_accounts,budget,bio FROM artist WHERE id = $1',
    values: [id],
  });

module.exports = getArtistQuery;
