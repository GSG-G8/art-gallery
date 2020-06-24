const connection = require('../../connection');

const getPaintingPrice = (paintingId) =>
  connection.query({
    text: 'SELECT property, artist_id FROM painting WHERE id = $1',
    values: [paintingId],
  });

const getCustomerBudget = (customerId) =>
  connection.query({
    text: 'SELECT budget FROM customer WHERE id = $1',
    values: [customerId],
  });

const updateBudgets = async (
  customerId,
  artistId,
  paintingId,
  paintingPrice,
) => {
  try {
    await connection.query('BEGIN');
    await connection.query({
      text:
        'UPDATE customer SET budget = budget-$2 WHERE id = $1 RETURNING budget;',
      values: [customerId, paintingPrice],
    });
    await connection.query({
      text:
        'UPDATE artist SET budget = budget+$2*0.85 WHERE id = $1 RETURNING budget;',
      values: [artistId, paintingPrice],
    });
    await connection.query({
      text:
        'INSERT INTO painting_user (painting_id, customer_id) VALUES ($1, $2);',
      values: [paintingId, customerId],
    });
    await connection.query({
      text:
        'UPDATE artist SET budget = budget+$2*0.85 WHERE id = $1 RETURNING budget;',
      values: [artistId, paintingPrice],
    });
    await connection.query('COMMIT');
  } catch (e) {
    await connection.query('ROLLBACK');
    throw e;
  }
};

module.exports = { getPaintingPrice, getCustomerBudget, updateBudgets };
