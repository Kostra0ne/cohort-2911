const express = require("express");
const router = new express.Router();

const allUsers = [
  { name: "jim", lastname: "foo", email: "jim@foo.com" },
  { name: "elise", lastname: "bar", email: "elise@foo.com" },
  { name: "noemie", lastname: "baz", email: "noemie@foo.com" },
];

// - users (send a list of users as json array of objects)

router.get("/", (req, res) => {
  // https://expressjs.com/en/4x/api.html#res.json
  res.json(allUsers);
});

module.exports = router;
