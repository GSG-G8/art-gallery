const { loginSchema } = require('../utils/validation');

exports.login = async (req, res, next) => {
  try {
    const { email, password, role } = await loginSchema.validate(req.body, {
      abortEarly: false,
    });
  } catch (err) {
    if (err.errors) {
      res.status(400).json({
        status: 400,
        message: err.errors,
      });
    }
  }
};
