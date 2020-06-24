const connection = require('../../connection');

const getArtists = () =>
  connection.query(
    'SELECT id,first_name,last_name,email,mobile_no,customized,reviews,profile_img,social_media_accounts,budget,bio,active FROM artist',
  );

module.exports = getArtists;
