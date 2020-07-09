const connection = require('../../connection');

const getAdminEmail = (email) =>
  connection.query({
    text: `SELECT * FROM admin WHERE email=$1;`,
    values: [email],
  });
const getAdminBudget = () =>
  connection.query('SELECT budget FROM admin WHERE id=1');

module.exports = { getAdminEmail, getAdminBudget };
