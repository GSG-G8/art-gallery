const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dacf3uopo',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImg = (path) =>
  new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      path,
      {
        crop: 'limit',
        width: 400,
        height: 400,
      },
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      },
    );
  });

module.exports = uploadImg;
