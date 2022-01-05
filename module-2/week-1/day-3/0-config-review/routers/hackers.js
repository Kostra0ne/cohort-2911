const express = require("express");
const router = new express.Router();
const HackerModel = require("./../models/Hacker");

router.get("/", (req, res) => {
  HackerModel.find() // mongoose method ! returning a promise
    .then((hackers) => res.render("hackers.hbs", { hackers }))
    .catch((err) => console.error(err));
});

router.get("/:id([a-z0-9]{24})", async (req, res) => {
  // the req is an object representing the incoming http request
  // amongst other values, it contains the route parameters
  // route.parameter > variable / placeholdres
  // console.log("what is req params ?");
//   console.log(req);
//   console.log(req.params);
  try {
    res.render("oneHacker.hbs", {
      hacker: await HackerModel.findById(req.params.id),
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
