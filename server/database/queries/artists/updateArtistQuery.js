const connection = require('../../connection');

const updateArtistQuery = (
  mobileNo,
  customized,
  socialMediaAccounts,
  bio,
  artistId,
) => {
  return connection.query({
    text:
      'UPDATE artist SET mobile_no=$1, customized=$2, social_media_accounts=$3, bio=$4 WHERE id = $5',
    values: [mobileNo, customized, socialMediaAccounts, bio, artistId],
  });
};

module.exports = updateArtistQuery;
