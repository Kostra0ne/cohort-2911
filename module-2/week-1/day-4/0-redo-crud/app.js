//! Basic configuration

const express = require("express");
const hbs = require("hbs");
//? Connect to the database
require("./config/dbConfig.js");
const app = express();

//! Configure my app

// app.set('views', __dirname + '/views')
//? The /views directory is the default one, you can use this to set it to /toto if you so desire.

app.use(express.static(__dirname + "/public"));
//? Static assets are located in /public

app.use(express.urlencoded({ extended: false }));
//? Retrieve the payload of a POST request and display it in an object with key-value pairs at request.body
//? See: https://expressjs.com/en/4x/api.html#express.urlencoded
app.set("view engine", "hbs");
//? Set the view Engine
hbs.registerPartials(__dirname + "/views/partials");

//! Routes setting

// const indexRouter = require('./routes/indexRouter.js')
// app.use('/', indexRouter)

app.use("/", require("./routes/indexRouter.js"));
app.use("/ducks", require("./routes/ducksRouter.js"));
app.use("/ducks", require("./routes/ducksUpdate"));

app.listen(3000, () => {
	console.log("Server 🦆 at: http://localhost:3000");
});
