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

    const customerBudget = await connection.query({
      text:
        'UPDATE customer SET budget = budget-$2 WHERE id = $1 RETURNING first_name, last_name, email, budget;',
      values: [customerId, paintingPrice],
    });

    const artistBudget = await connection.query({
      text:
        'UPDATE artist SET budget = budget+$2*0.85 WHERE id = $1 RETURNING budget;',
      values: [artistId, paintingPrice],
    });

    const paintingCounter = await connection.query({
      text:
        'UPDATE painting SET count_sold = count_sold+1 WHERE id = $1 RETURNING count_sold;',
      values: [paintingId],
    });

    const adminBudget = await connection.query({
      text:
        'UPDATE admin SET budget = budget+$1*0.15 WHERE id = 1 RETURNING budget;',
      values: [paintingPrice],
    });

    const paintingUser = await connection.query({
      text:
        'INSERT INTO painting_user (painting_id, customer_id) VALUES ($1, $2) RETURNING id, selling_date;',
      values: [paintingId, customerId],
    });

    await connection.query('COMMIT');
    return {
      customerBudget,
      artistBudget,
      paintingCounter,
      adminBudget,
      paintingUser,
    };
  } catch (e) {
    await connection.query('ROLLBACK');
    throw e;
  }
};

module.exports = { getPaintingPrice, getCustomerBudget, updateBudgets };
