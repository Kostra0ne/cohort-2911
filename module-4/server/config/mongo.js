const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/cats-app")
  .then((db) => console.log(`DB connected: ${db.connection.name}`))
  .catch((e) => console.error(e));
