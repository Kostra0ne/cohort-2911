require("./config/dbCconfig");
require("dotenv/config");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const app = express();

app.use(
	cors({
		origin: "http://localhost:3000",
	})
);
const isAuthenticated = require("./middlewares/jwt.middleware");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", require("./routes/auth.route"));
app.use("/api", isAuthenticated, require("./routes/rubberduck.route"));

module.exports = app;
