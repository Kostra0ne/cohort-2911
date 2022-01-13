var express = require("express");
var router = express.Router();
const hackerModel = require("./../models/Hacker");

// --------------------------------------------------

// READ ALL
// GET /hackers = fetch the hackers and pass them to a view
router.get("/", async (req, res, next) => {
  // try {
  //   res.render("hackers/list.hbs", {
  //     hackers: await hackerModel.find(),
  //   });
  // } catch (err) {
  //   next(err);
  // }
  hackerModel
    .find()
    .then((hackers) => res.render("hackers/list.hbs", { hackers }))
    .catch(next);
});

// GET /hackers/:id = fetch one hacker and send it back as json 
router.get("/api/:id", async (req, res, next) => {
  hackerModel
    .findById(req.params.id)
    .then((hacker) => res.json(hacker))
    .catch(next);
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
// POST /hackers = uses the form inputs to insert a doc in database
router.post("/", async (req, res, next) => {
  try {
    await hackerModel.create(req.body);
    res.redirect("/hackers");
  } catch (err) {
    next(err);
  }
});

// --------------------------------------------------
// UPDATE

// GET /hackers/edit/:id = display a form to update/edit one hacker
router.get("/edit/:id", (req, res, next) => {
  // 1 fetch the hacker we wanna modify and pass it to the view
  hackerModel
    .findById(req.params.id)
    .then((hacker) =>
      res.render("hackers/update.hbs", { hackerToEdit: hacker })
    )
    .catch(next);
});

router.post("/:id", async (req, res, next) => {
  try {
    // find the hacker in db by id and replace it with the posted informations
    await hackerModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/hackers");
  } catch (err) {
    next(err);
  }
});

// DISPLAY FORM
// UPDATE HACKER

// --------------------------------------------------
// DELETE

router.get("/delete/all", (req, res, next) => {
  // step 2 - use the model to remove all hackers
  hackerModel
    .deleteMany()
    // step 3 - redirect to the full hackers list
    .then(() => res.redirect("/hackers"))
    .catch(next);
});

router.get("/delete/:id", (req, res, next) => {
  // step 1 - extract the id out of the path
  const { id } = req.params;
  console.log(req.params.id === id);
  // step 2 - use the model to remove the hacker by it's id
  hackerModel
    .findByIdAndDelete(id)
    // step 3 - redirect to the full hackers list
    .then((success) => res.redirect("/hackers"))
    .catch(next);
});

module.exports = router;
