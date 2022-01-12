require("./../config/mongo.js");

const CatModel = require("./../models/Cat");

// seed files are "standalone"
const cats = [
  { name: "kitty", age: 2, description: "a cute lil cat" },
  { name: "baba", age: 5, description: "a great hunter" },
  { name: "shaman", age: 8, description: "a chill fat cat" },
  { name: "fugee", age: 8, description: "a lil brat" },
];

CatModel.deleteMany()
  .then(
    CatModel.insertMany(cats).then((dbSuccess) => {
      console.log(`SUCCESS ${dbSuccess.length} inserted !`);
    })
  )
  .catch((dbErr) => {
    console.log(dbErr);
  });
