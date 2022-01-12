const express = require("express");
const router = express.Router();
const User = require("./../model/User");
const bcrypt = require("bcrypt"); // lib to encrypt data
const protectAuthRoute = require("./../middlewares/protectAuthRoute");


let msg = null

router.get("/signin", protectAuthRoute, (req, res, next) => {
  res.render("auth/signin");
});

router.get("/signup", protectAuthRoute, async (req, res, next) => {
  res.render("auth/signup");
});

router.get("/signout", (req, res) => {
  req.session.destroy(function (err) {
    // cannot access session here anymore
    // console.log(req.session.currentUser);
    res.redirect("/auth/signin");
  });
});

router.post("/signin", async (req, res, next) => {
  // DO something
  //   res.render("auth/signin.hbs");
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email: email });

    if (!foundUser) {
      //   Display an error message telling the user that either the password
      // or the email is wrong
      req.flash("error", "Invalid credentials");
      res.redirect("/auth/signin");
    } else {
      // https://www.youtube.com/watch?v=O6cmuiTBZVs
      const isSamePassword = bcrypt.compareSync(password, foundUser.password);
      if (!isSamePassword) {
        // Display an error message telling the user that either the password
        // or the email is wrong
        req.flash("error", "Invalid credentials");
        res.redirect("/auth/signin");
      } else {
        // everything is fine so :
        // Authenticate the user...
        const userObject = foundUser.toObject(); // needed to convert mongoose object to classic js object
        delete userObject.password; // remove password before saving user in session
        // console.log(req.session, "before defining current user");
        req.session.currentUser = userObject;
        // above: Store the user in the session (data server side + a cookie is sent client side)

        // https://www.youtube.com/watch?v=nvaE_HCMimQ
        // https://www.youtube.com/watch?v=OFRjZtYs3wY

        req.flash("success", "Successfully logged in...");
        res.redirect("/profile");
      }
    }
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const newUser = { ...req.body }; // clone req.body with spread operator
    const foundUser = await User.findOne({ email: newUser.email });

    if (foundUser) {
      req.flash("warning", "Email already registered");
      res.redirect("/auth/signup");
    } else {
      const hashedPassword = bcrypt.hashSync(newUser.password, 10);
      // console.log("---------");
      // console.log(newUser.password, hashedPassword);
      // console.log("---------");
      newUser.password = hashedPassword;
      await User.create(newUser);
      req.flash("success", "Congrats ! You are now registered !");
      res.redirect("/auth/signin");
    }
  } catch (err) {
    let errorMessage = "";
    for (field in err.errors) {
      errorMessage += err.errors[field].message + "\n";
    }
    req.flash("error", errorMessage);
    res.redirect("/auth/signup");
  }
});

module.exports = router;
