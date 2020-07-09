const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { getCustomerProfile } = require('../database/queries');

const postCharge = async (req, res) => {
  try {
    // eslint-disable-next-line camelcase
    const { amount, source } = req.body;
    const { id: userId } = req.user;
    const { rows: userData } = await getCustomerProfile(userId);
    const { email } = userData[0];
    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      source,
      receipt_email: email,
    });

    if (!charge) throw new Error('charge unsuccessful');

    res.json({
      message: 'charge posted successfully',
      charge,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = postCharge;
