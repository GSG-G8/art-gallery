const { verify } = require('jsonwebtoken');

const protectedAdmin = async (req, res, next) => {
  try {
    const { role } = await verify(req.cookies.token, process.env.SECRET_KEY);
    if (role === 'admin') {
      next();
    } else {
      res
        .status(401)
        .json({ statusCode: 401, error: 'unauthenticated,your not admin' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = protectedAdmin;
