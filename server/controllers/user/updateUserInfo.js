const { updateCustomer } = require('../../database/queries');
const { updateSchema } = require('../../utils/validation');

const updateUser = async (req, res, next) => {
  try {
    const {
      user: { id },
    } = req;
    const updatedData = await updateSchema.validate(req.body, {
      abortEarly: false,
    });
    const { rows } = await updateCustomer(updatedData, id);
    if (rows.length !== 0) {
      const { first_name: name } = rows[0];
      res.json({
        statusCode: 200,
        message: `${name} info updates successfully`,
      });
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ statusCode: 400, message: error.errors });
    } else {
      next(error);
    }
  }
};
module.exports = updateUser;
