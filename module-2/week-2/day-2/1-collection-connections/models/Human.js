const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const humanSchema = new Schema({
  name: String,
  lastname: String,
  pet: {
    type: Schema.Types.ObjectId,
    ref: "cats",
  },
});

const HumanModel = mongoose.model("humans", humanSchema);

module.exports = HumanModel;
