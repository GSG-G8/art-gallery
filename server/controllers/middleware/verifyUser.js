const { verify } = require('../../utils/verify');

const verifyArtist = async (req, res, next) => {
  try {
    const decoded = await verify(req.cookies.token);
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
    const decoded = await verify(req.cookies.token);
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

module.exports = {
  verifyArtist,
  verifyUser,
};
