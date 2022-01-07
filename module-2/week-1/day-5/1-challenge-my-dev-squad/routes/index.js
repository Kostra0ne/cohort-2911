var express = require("express");
var router = express.Router();

const fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  const imagesPath = process.cwd() + "/public/images";
  const images = fs.readdirSync(imagesPath);
  res.render("index", { title: "Express", images });
});

module.exports = router;
