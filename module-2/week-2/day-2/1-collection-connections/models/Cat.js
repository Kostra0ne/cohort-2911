const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: String,
  age: Number,
  description: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "humans",
  },
});

const CatModel = mongoose.model("cats", catSchema);

module.exports = CatModel;
