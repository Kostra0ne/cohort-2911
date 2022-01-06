// const express = require("express");
// const router = express.Router();
const router = require("express").Router();

/**
 * Routes are not prefixed here.
 */

const renderHomePage = (req, res) => {
	res.render("home");
};

router.get("/", renderHomePage);

module.exports = router;
