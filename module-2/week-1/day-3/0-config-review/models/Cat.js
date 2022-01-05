// const { model, Schema } = require("mongoose");

// const catSchema = new Schema({
//   name: String,
//   color: String,
//   age: Number,
//   isCute: Boolean,
// });

// const CatModel = model("cats", catSchema);

// module.exports = CatModel;


const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({
  name: String,
  color: String,
  age: Number,
  isCute: Boolean,
});

const CatModel = mongoose.model("cats", catSchema); 
// cats here is the collection name (the one you'll see in compass)

module.exports = CatModel;