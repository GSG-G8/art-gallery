const connection = require('../../connection');

const getPaintingsQuery = () => connection.query('SELECT * FROM painting');

module.exports = getPaintingsQuery;
