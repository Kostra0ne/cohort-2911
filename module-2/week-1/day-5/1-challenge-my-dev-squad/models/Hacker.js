const { Schema, model } = require("mongoose");

const hackerSchema = Schema({
  name: String,
  email: String,
  favoriteLanguage: String
});

const hackerModel = model("hackers", hackerSchema);

module.exports = hackerModel;
