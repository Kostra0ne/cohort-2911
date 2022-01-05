const express = require("express");
const router = new express.Router();

const cats = ["felix", "kitty", "fugee", "hector", "mina"];

router.get("/", (request, response) => {
  response.render("cats", { cats });
});

router.get("/last", (request, response) => {
  response.render("cats", {
    lastCat: cats[cats.length - 1],
  });
});

module.exports = router;
