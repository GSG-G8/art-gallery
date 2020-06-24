const connection = require('../../connection');

const getPaintingPrice = (paintingId) =>
  connection.query({
    text: 'SELECT property FROM painting WHERE id = $1',
    values: [paintingId],
  });

const getCustomerBudget = (customerId) =>
  connection.query({
    text: 'SELECT budget FROM customer WHERE id = $1',
    values: [customerId],
  });

module.exports = { getPaintingPrice, getCustomerBudget };
