var express = require("express");
var router = express.Router();
const userModel = require("./../model/User");

/* GET users listing. */
// all routes are prefixed with /users

router.get("/display", async (req, res, next) => {
  res.render("users", { users: await userModel.find() });
});

router.get("/", async (req, res, next) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", (req, res, next) => {
  res.send("get one user from db");
});


router.post("/", (req, res, next) => {
  console.log("req.body >>>", req.body);
  userModel
    .create(req.body)
    .then((newUser) => res.status(201).json(newUser)) /// 201 => created
    .catch(next);
});

router.patch("/:id", (req, res, next) => {
  res.send("update one user in db");
});

router.delete("/:id", (req, res, next) => {
  res.send("delete one user from db");
});

module.exports = router;
