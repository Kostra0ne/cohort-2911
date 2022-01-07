// seed file are autonomous
// they can be called separaly from the main application
// just here to create test suites (datasets)

// get .env variables
require("dotenv").config();
// 1 connect to mongo
require("./../../config/mongo");

// i also the Cat model to insert some cats
const HackerModel = require("./../../models/Hacker");

const hackers = [
  {
    name: "jim",
    lastname: "bar",
    email: "foo@foo.com",
    favoriteLanguage: "java",
  },
  {
    name: "jill",
    lastname: "baz",
    email: "thing@dfdfd.fr",
    favoriteLanguage: "php",
  },
  {
    name: "hakim",
    lastname: "foo",
    email: "cccc@cccp.ru",
    favoriteLanguage: "golang",
  },
  {
    name: "chen",
    lastname: "hang",
    email: "bin@bam.co",
    favoriteLanguage: "javascript",
  },
];

(async function createHackers() {
  try {
    const { deletedCount } = await HackerModel.deleteMany(); // reset the collection
    console.log(`success : ${deletedCount} hackers deleted from database !`);
    const res = await HackerModel.insertMany(hackers);
    console.log(`success : ${res.length} hackers in database !`);
    process.exit();
  } catch (err) {
    console.log("ERROR !");
    console.error(err);
  }
})();
