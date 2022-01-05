const express = require("express");
const router = new express.Router();

router.get("/", (req, res) => {
  res.render("home.hbs");
});

router.get("/about", (req, res) => {
  res.render("about.hbs");
});

module.exports = router;
