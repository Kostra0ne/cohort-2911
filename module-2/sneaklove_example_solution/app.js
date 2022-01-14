require("dotenv").config();
require("./config/mongodb"); // database initial setup
require("./helpers/helpers-hbs"); // utils for hbs templates

// base dependencies
const express = require("express");
const hbs = require("hbs");
const app = express();
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
// initial config
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
hbs.registerPartials(__dirname + "/views/partial");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// SESSION SETUP
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 600000 }, // in millisec
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    saveUninitialized: true,
    resave: true,
  })
);

app.use(flash());
app.locals.site_url = process.env.SITE_URL;

// used in front end to perform ajax request (var instead of hardcoded)

// CUSTOM MIDDLEWARE
// check if user is logged in...
// usecases : conditional display in hbs templates
// WARNING: this function must be USED AFTER the session setup
// WARNING: this function must be USED BEFORE app.use(router(s))

function checkloginStatus(req, res, next) {
  res.locals.user = req.user;
  // access this value @ {{user}} or {{user.prop}} in .hbs
  res.locals.isLoggedIn = Boolean(req.session.currentUser);
  // access this value @ {{isLoggedIn}} in .hbs
  next(); // continue to the requested route
}

// Custom connect-flash (req.flash) middleware.
function eraseSessionMessage() {
  // Closure time baby.
  let count = 0; // initialize counter in parent scope and use it in inner function
  return function (req, res, next) {
    if (req.session.msg) {
      // only increment if session contains msg
      if (count) {
        // if count greater than 0
        count = 0; // reset counter
        req.session.msg = null; // reset message
      }
      res.locals.msg = req.session.msg; // expose msg to the views ! => you can access it with {{msg}}
      ++count; // increment counter
    }
    next(); // continue to the requested route
  };
}
// Expose cart variable to the view through res.locals
// you can access it with {{cart}}
app.use(function exposeUserCart(req, res, next) {
  res.locals.cart = req.session.cart || [];
  next();
});

app.use(require("./middlewares/exposeFlashMessage"));
app.use(require("./middlewares/authenticateUser"));
app.use(checkloginStatus);
app.use(eraseSessionMessage());

const basePageRouter = require("./routes/index");
app.use("/", basePageRouter);
app.use("/", require("./routes/dashboard_sneaker"));
app.use("/", require("./routes/auth"));
app.use("/", require("./routes/sneakers.api"));
app.use("", require("./routes/tags.api"));

// If the request and the routes endpoint don't match,
// Your request will end up in this middleware meaning
// That the url was not found.
// Hence the reason why we display a not_found view.
app.use((req, res, next) => {
  res.render("not_found.hbs");
});

// Error handling middleware.
// Any middleware or route handler that calls
// the next() function with an argument => next(err),
// will trigger this error handling middleware.
// Express has a builtin error handling middleware but you
// could use your own to display a cool error page : )

app.use((err, req, res, next) => {
  res.render("error.hbs");
});

app.listen(process.env.PORT, () => {
  console.log(`app started at ${process.env.SITE_URL}:${process.env.PORT}`);
});
