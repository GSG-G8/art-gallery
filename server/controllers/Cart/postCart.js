const { postCartQuery } = require('../../database/queries');
const { cartSchema } = require('../../utils/validation');

const postCart = async (req, res, next) => {
  try {
    await cartSchema.validate(req.body, { abortEarly: false });
    const { rows } = await postCartQuery(req.body);
    const { title } = rows[0];
    res.status(201).json({
      StatusCode: 201,
      data: {
        cohort: rows[0],
        message: `Paintings with Key (title)=(${title}) added successfully`,
      },
    });
  } catch (err) {
    if (err.errors) {
      res.status(400).json({ statusCode: 400, data: { message: err.errors } });
    } else if (err.detail) {
      res.status(409).json({
        statusCode: 409,
        data: {
          message: err.detail,
        },
      });
    } else {
      next(err);
    }
  }
};

module.exports = postCart;
