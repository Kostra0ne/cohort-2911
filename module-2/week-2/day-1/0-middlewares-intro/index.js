const express = require("express");
const app = express();
const fs = require("fs"); // core node API

// MIDDLEWARE DECLARATIONS

const dummyMiddleware = (req, res, next) => {
  console.log("step 1 - dummy example !!!");
  next();
};

const writeInfosOnTheDisk = (req, res, next) => {
  console.log(req.method, req.path);
  fs.appendFileSync(
    "./log.txt",
    `${req.method} - ${req.path} - ${Date.now()} \n`
  );
  next();
};

const augmentTheRequestObject = (req, res, next) => {
  console.log("step 2 - augmentTheRequestObject!!!");
  req.foo = "bar";
  next();
};


// in express middlewares function can be called at 3 levels
// - app level
// - router lever
// - route level

app.use(writeInfosOnTheDisk);

// routerArtist.use(dummyMiddleware);

// ROUTING

app.get("/", (req, res) => {
  res.redirect("/a");
});

// app.get("/a", dummyMiddleware, (req, res) => {
//   console.log("step 2 - inside route handler");
//   res.send("i'm a ");
// });

app.get("/a", dummyMiddleware, augmentTheRequestObject, (req, res) => {
  console.log("step 3 - inside route handler");
  res.send("i'm a | " + req.foo);
});

app.get("/b", writeInfosOnTheDisk, (req, res) => {
  res.send("i'm b");
});

const myFirstClosure = (value, clbk) => {
  // console.log("@myFirstClosure - what is value ? => ", value);
  return function (req, res, next) {
    console.log(">>>>>", value); // hellow
    // console.log(value);
    next();
  };
};


app.get("/c", myFirstClosure("toto"), (req, res) => {
  res.send("i'm c");
});

app.listen(7777, () => {
  console.log("http://localhost:7777");
});
