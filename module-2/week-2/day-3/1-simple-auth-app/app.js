require("./config/mongodb");

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const flash = require("connect-flash");
const hbs = require("hbs");
const session = require("express-session");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // expose les données du cookie under req.cookie
app.use(express.static(path.join(__dirname, "public")));

// INITIALIZE SESSION
app.use(
	session({
		secret:
			process.env.SESSION_SECRET || "ASecretStringThatSouldBeHARDTOGUESS/CRACK",
		saveUninitialized: true,
		resave: true,
	})
);

// FLASH MESSAGES
// enable "flash messaging" system
// flash relies on the express-session mechanism
app.use(flash());

// CUSTOM MIDDLEWARES
// matrix cookie scene : https://www.youtube.com/watch?v=nvaE_HCMimQ
// the web is a mess : https://www.youtube.com/watch?v=OFRjZtYs3wY
app.use(function myCookieLogger(req, res, next) {
	console.log(req.cookies);
	next();
});

// const devMode = true;

// if (devMode === true)
//   app.use(function createFakeLoggedInUser(req, res, next) {
//     res.locals.currentUser = {
//       _id: "ksdnsx73dksk",
//       name: "foo",
//       email: "bar@bar.bar",
//     };
//     next();
//   });

app.use(require("./middlewares/exposeFlashMessage"));
app.use(require("./middlewares/exposeLoginStatus"));

const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");

app.use("/", indexRouter);
app.use("/auth", authRouter);

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
