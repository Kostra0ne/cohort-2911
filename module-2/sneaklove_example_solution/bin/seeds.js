require("dotenv").config();
const mongoose = require("mongoose");
const Sneaker = require("../models/Sneaker");
const Tag = require("../models/Tag");
const User = require("../models/User");

const tags = [
  { label: "Gangsta" },
  { label: "Streetwear" },
  { label: "City Scout" },
  { label: "All Terrain" },
  { label: "Mixed" },
];

const sneakers = [
  {
    name: "Nike",
    ref: "XZeOeza" + Date.now(),
    sizes: ["38", "39"],
    description: "Nice shoes for the winter",
    price: 19,
    category: "women",
    id_tags: ["All Terrain", "Mixed"],
  },
  {
    name: "Nike",
    ref: "XZeOeza" + Date.now(),
    sizes: ["38", "39"],
    description: "Nice shoes for the winter",
    price: 19,
    category: "men",
    id_tags: ["City Scout", "Streetwear"],
  },
  {
    name: "Nike",
    ref: "XZeOeza" + Date.now(),
    sizes: ["38", "39"],
    description: "Nice shoes for the winter",
    price: 19,
    category: "women",
    id_tags: ["Gangsta"],
  },
  {
    name: "Nike",
    ref: "XZeOeza" + Date.now(),
    sizes: ["38", "39"],
    description: "Nice shoes for the winter",
    price: 19,
    category: "kids",
    id_tags: ["Streetwear"],
  },
  {
    name: "Nike",
    ref: "XZeOeza" + Date.now(),
    sizes: ["38", "39"],
    description: "Nice shoes for the winter",
    price: 19,
    category: "kids",
    id_tags: ["Mixed"],
  },
  {
    name: "Nike",
    ref: "XZeOeza" + Date.now(),
    sizes: ["38", "39"],
    description: "Nice shoes for the winter",
    price: 19,
    category: "men",
    id_tags: ["Gangsta", "Mixed"],
  },
];

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  })
  .then(async (self) => {
    try {
      await Sneaker.deleteMany();
      await Tag.deleteMany();
      const dbTags = await Tag.create(tags);
      sneakers.forEach((sneaker) => {
        sneaker.id_tags.forEach((tag, i) => {
          const label = dbTags.find((t) => t.label == tag);
          sneaker.id_tags[i] = label._id;
        });
      });
      const dbSneakers = await Sneaker.create(sneakers);
      console.log(dbSneakers);
      mongoose.connection.close();
    } catch (e) {
      console.log(e);
    }
  })
  .catch((err) => {
    console.log(err);
  });
