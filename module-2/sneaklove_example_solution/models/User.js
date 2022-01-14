const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// - Sneaker {name, ref, sizes, description, price, category: [men, women, kids], id_tags: [ObjectId] }
// - User {name, lastname, email, password}
const userSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
