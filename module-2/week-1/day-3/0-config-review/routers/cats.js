const express = require("express");
const router = new express.Router();
const CatModel = require("./../models/Cat");

// router.get("/", async (req, res) => {
//   const x = await CatModel.find();
//   console.log("what is x ???", x);
//   res.render("cats.hbs", { cats: x });
// });

// router.get("/", async (req, res) => {
//   try {
//     const cats = await CatModel.find();
//     res.render("cats.hbs", { cats });
//   } catch (err) {
//     console.error(err);
//   }
// });

router.get("/", (req, res) => {
  CatModel.find()
    .then((cats) => res.render("cats.hbs", { cats }))
    .catch((err) => console.error(err));
});

module.exports = router;
