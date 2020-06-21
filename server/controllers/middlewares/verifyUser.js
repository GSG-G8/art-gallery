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
    if (decoded.role === 'user') {
      next();
    } else {
      res.status(401).json({ statusCode: 401, message: 'User only endPoints' });
    }
  } catch (err) {
    res.status(401).json({ status: 401, message: 'unauthorized' });
  }
};

module.exports = {
  verifyArtist,
  verifyUser,
};