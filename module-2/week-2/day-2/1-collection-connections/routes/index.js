var express = require("express");
var router = express.Router();
const CatModel = require("./../models/Cat");
const HumanModel = require("./../models/Human");

/* GET home page. */
router.get("/", async (req, res, next) => {
  // find all cats in db
  try {
    const cats = await CatModel.find().populate("owner");
    const humans = await HumanModel.find();
    
    console.log(humans);


    res.render("cats.hbs", { title: "cat's app", cats, humans });
  } catch (err) {
    console.error(err);
  }
});

router.get("/create-cat", (req, res) => {
  res.render("createCat.hbs");
});

router.get("/cats/:id", function (req, res, next) {
  // console.log(req.params.id);
  CatModel.findById(req.params.id)
    .then((dbResult) => {
      res.render("cat.hbs", {
        cat: dbResult,
      });
    })
    .catch((dbErr) => next(dbErr));
});

router.get("/update-cat/:id", (req, res) => {
  CatModel.findById(req.params.id)
    .then((dbResult) => {
      res.render("updateCat.hbs", {
        cat: dbResult,
      });
    })
    .catch((dbErr) => next(dbErr));
});

router.post("/update-cat/:id", (req, res, next) => {
  // console.log('----req params id => -----');
  // console.log(req.params.id);
  // console.log("--- req body => ------");
  // console.log(req.body); // will contain the posted informations
  // it's an object : the keys are the names declared in the form
  CatModel.findByIdAndUpdate(req.params.id, req.body)
    .then((dbResult) => {
      res.redirect("/");
    })
    .catch((dbError) => next(dbError));
});

router.post("/create-cat", (req, res, next) => {
  console.log(req.body); // will contain the posted informations
  // it's an object : the keys are the names declared in the form
  CatModel.create(req.body)
    .then((dbResult) => {
      // console.log(dbResult);
      res.redirect("/");
    })
    .catch((dbError) => next(dbError));
});

router.get("/delete-cat/:id", async (req, res) => {
  // try {
  //   await CatModel.findByIdAndDelete(req.params.id);
  //   res.redirect("/");
  // } catch (dbErr) {
  //   next(dbErr);
  // }
  CatModel.findByIdAndDelete(req.params.id)
    .then((dbSuccess) => {
      res.redirect("/");
    })
    .catch((dbErr) => {
      next(dbErr);
    });
});

module.exports = router;

/*

todo : render => array => each => link
todo: render => object => details
todo: req.params
todo: seed  implementation review
todo: seed exec

*/
