const { getCustomerProfile } = require('../database/queries');

exports.getUserProfile = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { rows: data } = await getCustomerProfile(id);
    res.json({ statusCode: 200, data });
  } catch (err) {
    next(err);
  }
};
