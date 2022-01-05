const mongoose = require("mongoose");

// --  Simply Connect to database ---------->
// cats-app is the database name !!!

mongoose
  .connect("mongodb://localhost/cats-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => console.error("Error connecting to mongo", err));
