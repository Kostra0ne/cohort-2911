const createError = require("http-errors");
require("./config/dbConfig");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const req = require("express/lib/request");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
	session({
		secret: "ALongStringWhichShouldBeHardToDecipher",
		resave: true,
		saveUninitialized: true,
	})
);

app.use(require("./middlewares/setUser")());
// app.use((req, res, next) => {
// 	console.log("Session: ", req.session);
// 	next();
// });
// app.use((req, res, next) => {
// 	console.log("User: ", req.session.currentUser);
// 	next();
// });

app.use("/", indexRouter);
app.use("/", require("./routes/auth"));
app.use("/users", usersRouter);
app.use("/", require("./routes/profile"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
