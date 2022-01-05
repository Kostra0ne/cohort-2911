const mongoose = require("mongoose");

const hackerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  favoriteLanguage: {
    type: String,
    default: "javascript",
    emum: ["javascript", "golang", "java", "php", "go", "ruby", "c#"],
  },
});

const HackerModel = mongoose.model("hackers", hackerSchema);
// cats here is the collection name (the one you'll see in compass)

module.exports = HackerModel;
