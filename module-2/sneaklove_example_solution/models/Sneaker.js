const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// - Sneaker {name, ref, sizes, description, price, category: [men, women, kids], id_tags: [ObjectId] }
const sneakerSchema = new Schema({
  name: String,
  ref: String,
  sizes: [String],
  image: {
    type: String,
    default:
      "https://cdn.shopify.com/s/files/1/2358/2817/products/Wethenew-Sneakers-France-Nike-Air-Max-1-Evolution-Of-Icons-CW6541-100-1_1600x.png?v=1616506837",
  },
  description: String,
  price: Number,
  category: {
    type: String,
    enum: ["men", "women", "kids"],
  },
  id_tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
});

const Sneaker = mongoose.model("Sneaker", sneakerSchema);

module.exports = Sneaker;
