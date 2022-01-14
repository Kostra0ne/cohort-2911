const User = require("../models/User");

function authenticateUser(req, res, next) {
  if (req.session.currentUser) {
    User.findById(req.session.currentUser._id)
      .then((foundUser) => {
        req.user = foundUser;
        next();
      })
      .catch((error) => {
        next();
      });
  } else {
    next();
  }
}

module.exports = authenticateUser;
