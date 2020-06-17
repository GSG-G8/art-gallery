const clientError = (req, res) => {
  res.status(404).json({ msg: 'page not found' });
};

const serverError = (err, req, res, next) => {
  res.status(err.status || 500).json({ msg: err.msg || 'server error' });
};

module.exports = {
  clientError,
  serverError,
};
