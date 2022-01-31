const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: "gdaconcept",
  api_key: "245381429842997",
  api_secret: "bmgdxbpe6yt-HYURoIEewndrDpE",
});

// cloudinary : SAAS platform : specialized in images hosting (tools : metadata, image analyzing ...)
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
});

const fileUploader = multer({ storage });
// a middleware designed to parse file from requests and associate to req.file
module.exports = fileUploader;
