const { Schema, model } = require("mongoose");

const plan = new Schema({
  name: String,
  age: Number,
  description: String,
});

const catModel = model("cats", plan);

module.exports = catModel;
