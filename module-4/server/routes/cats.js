var express = require("express");
var router = express.Router();
const catModel = require("./../model/Cat");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    res.json(await catModel.find());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    res.json(await catModel.findById(req.params.id));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
