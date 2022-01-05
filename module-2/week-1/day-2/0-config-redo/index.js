console.log("hello node !");
// 1 - require the dependencies
const express = require("express");
const hbs = require("hbs");
const app = express();

// 2 - write the main configs
// a - defining the static folder (CSS / Images / Videos / Audio / frontend JS scripts)
app.use(express.static(__dirname + "/public"));
// b - defining the view engine
app.set("view engine", "hbs");
// c - defining the views folder
app.set("views", __dirname + "/views");
// d - defining the partials folder
hbs.registerPartials(__dirname + "/views/partials");

// 3 - setup some routes (OR routers)
const routerMain = require("./router/index");
const routerUsers = require("./router/users");
const routerCats = require("./router/cats");

app.use("/", routerMain);
app.use("/community", routerUsers);
app.use("/cats", routerCats);

// 4 - kickstart the application with listen()
app.listen(3000, () => {
  console.log("app is running on http://localhost:3000");
});
