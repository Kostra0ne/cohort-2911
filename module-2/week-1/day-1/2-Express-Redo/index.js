const express = require("express");
const app = express();
const hbs = require("hbs");

const students = require("./data/script");
console.log(students);

app.listen(4000);
