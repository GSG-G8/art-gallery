const { verify } = require('jsonwebtoken');

exports.verify = (token) =>
  new Promise((resolve, reject) => {
    verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) reject(err);
      else resolve(decoded);
    });
  });
