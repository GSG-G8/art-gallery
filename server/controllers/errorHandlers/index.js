const clientError = (req, res) => {
  res.status(404).json({ statusCode: 404, message: 'page not found' });
};

// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  if (process.env.NODE_ENV !== 'production') console.error(err);
  res
    .status(err.status || 500)
    .json({ statusCode: 500, message: err.msg || 'server error' });
};

module.exports = [clientError, serverError];
