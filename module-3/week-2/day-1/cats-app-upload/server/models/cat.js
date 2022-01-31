const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// plan the document shapes
const catSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  color: String,
  age: Number,
  image: {
    type: String,
    default:
      "https://preview.redd.it/j5oivfqxubd61.png?width=690&format=png&auto=webp&s=faa96b819aad7ebddb6a8078b66af8f3e6b32e3c",
  },
});

// buiold an object embeding CRUD methods and  attached to the cat collection id db
const CatModel = mongoose.model("cats", catSchema);

// export it for later reuse
module.exports = CatModel;
