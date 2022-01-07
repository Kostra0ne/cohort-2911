var express = require("express");
var router = express.Router();

const fs = require("fs"); // this i core node librairie > File System

/* GET home page. */
router.get("/", function (req, res, next) {
  // process.cwd() : current working directory : lead to the app's root (the one containing the app.js file)
  // console.log(process.cwd());
  // console.log(__dirname);
  const imagesPath = process.cwd() + "/public/images";
  const images = fs.readdirSync(imagesPath);
  // console.log(images);
  res.render("index", { title: "Express", images });
});

module.exports = router;
