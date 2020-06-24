const connection = require('../../connection');

const switchActivateArtist = (id) =>
  connection.query({
    text:
      'UPDATE artist SET active = NOT active WHERE id=$1 returning email,active',
    values: [id],
  });

module.exports = switchActivateArtist;
