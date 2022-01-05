const express = require("express");
const router = new express.Router();

router.get("/all-members", (req, res) => {
  res.render("users", {
    users: [
      {
        name: "foo",
        email: "foo@foo.foo",
        role: "admin",
        favColor: "black",
      },
      {
        name: "jenny",
        email: "jenny@baz.bar",
        role: "user",
        favColor: "blue",
      },
      {
        name: "will",
        email: "will@i.am",
        role: "user",
        favColor: "green",
      },
      {
        name: "gui",
        email: "gui@owl.dev",
        role: "user",
        favColor: "purple",
      },
    ],
  });
});

router.get("/last-member", (req, res) => {
  res.render("users", {
    users: [
      {
        name: "gui",
        email: "gui@owl.dev",
        role: "user",
        favColor: "purple",
      },
    ],
  });
});

module.exports = router;
