const connection = require('../../connection');

const updateCustomer = ({ firstName, lastName, budget }, id) =>
  connection.query({
    text: `UPDATE customer 
    SET first_name = $1, last_name=$2,budget=$3
  WHERE id=$4 returning first_name`,
    values: [firstName, lastName, budget, id],
  });

module.exports = updateCustomer;
