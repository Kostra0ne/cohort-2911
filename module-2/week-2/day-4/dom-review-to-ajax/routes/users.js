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
  userModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then((updatedUser) => res.status(200).json(updatedUser))
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  userModel
    .findByIdAndDelete(req.params.id)
    .then((deleteUser) => res.status(200).json(deleteUser))
    .catch(next);
});

module.exports = router;
