// seed file are autonomous
// they can be called separaly from the main application
// just here to create test suites (datasets)

// 1 connect to mongo
require("./../../../config/mongo");

// i also the Cat model to insert some cats
const CatModel = require("./../../../models/Cat");

// should create a bunch of cats

const cats = [
  { name: "Fugee", color: "white" },
  { name: "Lou", color: "blue" },
  { name: "Toto", color: "grey" },
  { name: "Mina", color: "red and white" },
];

(async function createCats() {
  try {
    const { deletedCount } = await CatModel.deleteMany(); // reset the collection
    console.log(`success : ${deletedCount} cats deleted from database !`);
    const res = await CatModel.insertMany(cats);
    console.log(`success : ${res.length} cats inserted in database !`);
  } catch (err) {
    console.log("ERROR !");
    console.error(err);
  }
})();
