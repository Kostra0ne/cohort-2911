// create one express app with 2 routers
// - main (home / about )
// - users (send a list of users as json)

const express = require("express"); // fetch the framework
const hbs = require("hbs");

const app = express(); // create a new app out of it
const PORT = 5555;

// CONFIG
app.use(express.static(__dirname + "/public")); // state wich folder the browser can download (static) assets from
hbs.registerPartials(__dirname + "/views/partials");

// ROUTING

app.use("/", require("./routers/index.js"));
app.use("/users", require("./routers/users.js"));

// LISTEN
app.listen(PORT, () =>
  console.log(`app is ready to rock @ http://localhost:${PORT}`)
);
