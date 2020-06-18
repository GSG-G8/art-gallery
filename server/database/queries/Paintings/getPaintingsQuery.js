const connection = require('../../connection');

const getPaintingsQuery = () => connection.query('SELECT * FROM paintings');

module.exports = getPaintingsQuery;
