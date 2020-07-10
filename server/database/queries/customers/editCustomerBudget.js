const connection = require('../../connection');

const editCustomerBudget = (id, budget) =>
  connection.query({
    text: `UPDATE customer SET budget = budget + $2 WHERE id = $1 RETURNING budget;`,
    values: [id, budget],
  });

module.exports = editCustomerBudget;
