const {
  getPaintingPrice,
  getCustomerBudget,
  updateBudgets,
} = require('../../database/queries');

const { buyPaintingsSchema } = require('../../utils/validation');
const sendMail = require('../middleware/mail');

const buyPaintings = async (req, res, next) => {
  try {
    const {
      user: { id: customerId },
    } = req;
    const { paintingId, property } = await buyPaintingsSchema.validate(
      req.body,
      { abortEarly: false },
    );
    const { rows: paintingPriceRows } = await getPaintingPrice(paintingId);
    if (paintingPriceRows.length > 0) {
      const {
        property: paintingProprty,
        artist_id: artistId,
      } = paintingPriceRows[0];
      if (paintingProprty[property]) {
        const paintingPrice = paintingProprty[property];

        const { rows: customerBudgetRows } = await getCustomerBudget(
          customerId,
        );
        const { budget: customerBudget } = customerBudgetRows[0];

        if (Number(customerBudget) > Number(paintingPrice)) {
          const results = await updateBudgets(
            customerId,
            artistId,
            paintingId,
            paintingPrice,
          );
          const {
            customerBudget: { rows: newCustomerBudget },
            artistBudget: { rows: artistBudget },
            paintingCounter: { rows: paintingCounter },
            adminBudget: { rows: adminBudget },
            paintingUser: { rows: paintingUser },
          } = results;
          res.status(200).json({
            statusCode: 200,
            message: `Painting with id = ${paintingId} was added succesfully`,
            customerNewBudget: newCustomerBudget[0].budget,
            artistNewBudget: artistBudget[0].budget,
            adminNewBudget: adminBudget[0].budget,
            paintingSellingCounter: paintingCounter[0].count_sold,
            sellingDate: paintingUser[0].selling_date,
          });
          await sendMail(
            customerId,
            newCustomerBudget[0].budget,
            paintingUser[0],
          );
        } else {
          res.status(400).json({
            statusCode: 400,
            message: "Sorry You don't have enough money for this operation",
          });
        }
      } else {
        res.status(400).json({
          statusCode: 400,
          message: 'This property is not listed for this product',
        });
      }
    } else {
      res.status(400).json({
        statusCode: 400,
        message: "Sorry there's no painting with this ID",
      });
    }
  } catch (err) {
    if (err.errors) {
      res.status(400).json({ statusCode: 400, message: err.errors });
    } else {
      next(err);
    }
  }
};

module.exports = buyPaintings;
