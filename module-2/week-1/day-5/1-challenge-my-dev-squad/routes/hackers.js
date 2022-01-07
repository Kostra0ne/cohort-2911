var express = require("express");
var router = express.Router();
const hackerModel = require("./../models/Hacker");

// --------------------------------------------------

// READ ALL
// GET /hackers = fetch the hackers and pass them to a view
router.get("/", async (req, res, next) => {
  try {
    res.render("hackers/list.hbs", {
      hackers: await hackerModel.find(),
    });
  } catch (err) {
    next(err);
  }
});

// READ ONE
// GET /hackers/:id = fetch one hacker and pass them to a view



// BONUS
// GET /hackers/api = returns a JSON array containing all hackers
router.get("/api", async (req, res, next) => {
  try {
    res.json(await hackerModel.find());
  } catch (err) {
    next(err);
  }
});


// --------------------------------------------------
// CREATE

// DISPLAY FORM
// GET /hackers/create = displays the form to create a hacker
router.get("/create", (req, res, next) => {
  res.render("hackers/create.hbs");
});

// POST HACKER
// POST /hacker = uses the form inputs to insert a doc in database
router.post("/", async (req, res, next) => {
  try {
    await hackerModel.create({
      email: req.body.userEmail,
      name: req.body.userName,
      favoriteLanguage: req.body.favoriteLanguage,
    });
    res.redirect("/hackers");
  } catch (err) {
    next(err);
  }
});

// --------------------------------------------------
// UPDATE


// DISPLAY FORM
// UPDATE HACKER

// --------------------------------------------------
// DELETE



module.exports = router;
