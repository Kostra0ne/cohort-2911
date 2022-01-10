// config/cloudinary.config.js
 
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
 
// connecting to your cloudinary account with the previded credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});
 
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    allowed_formats: ['jpg', "jpeg", 'png', "gif"],
    folder: 'cohort-2911' // The name of the folder in cloudinary
    // resource_type: 'raw' => this is in case you want to upload other type of files, not just images
  }
});
 
// multer is really responsible to manage the incoming file (from the client)
module.exports = multer({ storage });