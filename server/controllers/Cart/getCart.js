exports.getCart = async (req, res, next) => {
  const { id } = req.user;
  console.log('hi id', id);
};
