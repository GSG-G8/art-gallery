const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dacf3uopo',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImg = async (path) => {
  try {
    const result = await cloudinary.uploader.upload(path);
    return result;
  } catch (err) {
    throw new Error('upload image error');
  }
};

module.exports = uploadImg;
