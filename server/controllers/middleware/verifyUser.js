const { verify } = require('jsonwebtoken');

const verifyArtist = async (req, res, next) => {
  try {
    const decoded = await verify(req.cookies.token, process.env.SECRET_KEY);
    req.user = decoded;
    if (decoded.role === 'artist') {
      next();
    } else {
      res
        .status(401)
        .json({ statusCode: 401, message: 'Artist only endPoints' });
    }
  } catch (err) {
    res.status(401).json({ status: 401, message: 'unauthorized' });
  }
};

const verifyUser = async (req, res, next) => {
  try {
    const decoded = await verify(req.cookies.token, process.env.SECRET_KEY);
    req.user = decoded;
    if (decoded.role === 'customer') {
      next();
    } else {
      res.status(401).json({ statusCode: 401, message: 'User only endPoints' });
    }
  } catch (err) {
    res.status(401).json({ status: 401, message: 'unauthorized' });
  }
};

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

module.exports = {
  verifyArtist,
  verifyUser,
  protectedAdmin,
};
