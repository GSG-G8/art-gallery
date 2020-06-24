const {
  getPaintingPrice,
  // getCustomerBudget,
} = require('../../database/queries');

const buyPaintings = async (req, res, next) => {
  try {
    const {
      body: { customerId, paintingId, property },
    } = req;
    const { rows } = await getPaintingPrice(paintingId);
    const { property: paintingProprty } = rows[0];
    if (paintingProprty[property]) {
      const paintingPrice = paintingProprty[property];
      res.json({ customerId, paintingId, paintingProprty, paintingPrice });
    } else {
      res.json({
        statusCode: 400,
        message: 'This property is not listed for this product',
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = buyPaintings;
