const connection = require('../../connection');

const getAdminEmail = (email) =>
  connection.query({
    text: `SELECT * FROM admin WHERE email=$1;`,
    values: [email],
  });

module.exports = getAdminEmail;
