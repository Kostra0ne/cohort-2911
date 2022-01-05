const express = require("express");
const router = new express.Router();

// in express : router are mini app wrapped in the main app

router.get("/", (req, res) => {
  const options = {
    css: ["carousel"],
    js: ["carousel"],
  };
  res.render("home", options);
});

router.get("/about-us", (req, res) => {
  res.render("about");
});

router.get("/contact-us", (req, res) => {
  res.render("contact", {
    css: ["form"],
  });
});

module.exports = router;
