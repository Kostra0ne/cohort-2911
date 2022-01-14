const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.get("/signin", (req, res) => {
  res.render("signin");
});

/** AUTH MADE WITH ASYNC AWAIT */

router.post("/signin", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      // This will be handled, by the eraseSessionMessage middelware in app.js
      req.session.msg = { status: 401, text: "Invalid credentials" };
      /**  Same could be done using the flash middleware **/
      // req.flash("error", "Invalid credentials");  // If you wanted to use flash you could aswell, you would have to handle i
      return res.redirect("/signin");
    }
    if (!bcrypt.compareSync(password, foundUser.password)) {
      // req.flash("error", "Invalid credentials");
      req.session.msg = { status: 401, text: "Invalid credentials" };
      return res.render("/signin");
    }
    req.session.currentUser = {
      _id: foundUser._id,
    };

    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", async (req, res, next) => {
  const { email, name, lastname, password } = req.body;

  try {
    const foundUser = await User.findOne({ email: email });
    if (foundUser) {
      // req.flash("error", "Email already taken");
      req.session.msg = { status: 401, text: "Email already taken." };
      return res.redirect("/signup");
    }
    const salt = 10;
    const hashedPassword = bcrypt.hashSync(password, salt);
    await User.create({
      name,
      email,
      lastname,
      password: hashedPassword,
    });
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

module.exports = router;
