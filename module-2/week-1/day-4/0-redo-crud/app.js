//! Basic configuration

const express = require("express");
const hbs = require("hbs");
require("./config/dbConfig.js");
const app = express();

//! Configure my app

// app.set('views', __dirname + '/views')

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//! Routes setting

// const indexRouter = require('./routes/indexRouter.js')
// app.use('/', indexRouter)

app.use("/", require("./routes/indexRouter.js"));
app.use("/ducks", require("./routes/ducksRouter.js"));
app.use("/ducks", require("./routes/ducksUpdate"));

app.listen(3000, () => {
	console.log("http://localhost:3000");
});
