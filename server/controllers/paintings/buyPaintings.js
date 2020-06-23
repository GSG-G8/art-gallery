const {
  getPaintingPrice,
  // getCustomerBudget,
} = require('../../database/queries');

const buyPaintings = async (req, res, next) => {
  try {
    const {
      body: { customerId, paintingsId },
    } = req;
    const paintingsArray = JSON.parse(paintingsId);
    const paintingPrice = [];
    for (let i = 0; i < paintingsArray.length; i += 1) {
      getPaintingPrice(paintingsArray[i]).then((x) => {
        paintingPrice.push(x.rows[0].price);
      });
    }
    res.json({ customerId, paintingsId });
  } catch (err) {
    next(err);
  }
};

module.exports = buyPaintings;
