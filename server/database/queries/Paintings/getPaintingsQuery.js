const connection = require('../../connection');

const getPaintingsQuery = () =>
  connection.query(
    'SELECT P.id, P.title,P.img,P.description,P.category,P.property,P.count_sold,P.artist_id, A.customized FROM painting P INNER JOIN artist A ON P.artist_id = A.id ',
  );

module.exports = getPaintingsQuery;
