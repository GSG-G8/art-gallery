const connection = require('../../connection');

const updateAvatarQuery = (profileImg, artistId) => {
  return connection.query({
    text: 'UPDATE artist SET profile_img=$1 WHERE id=$2',
    values: [profileImg, artistId],
  });
};

module.exports = updateAvatarQuery;
