const connection = require('../../connection');

const getPaintingQuery = (id) =>
  connection.query({
    text:
      'SELECT P.id, P.title,P.img,P.description,P.category,P.property,P.count_sold,P.artist_id, A.customized , A.first_name, A.last_name FROM painting P INNER JOIN artist A ON P.artist_id = A.id WHERE P.id=$1',
    values: [id],
  });

module.exports = getPaintingQuery;
