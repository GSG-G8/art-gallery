const { getAdminBudget } = require('../../database/queries/index');

const adminData = async (req, res, next) => {
  try {
    const { rows: data } = await getAdminBudget();
    res.json({ statusCode: 200, data });
  } catch (err) {
    next(err);
  }
};

module.exports = adminData;
