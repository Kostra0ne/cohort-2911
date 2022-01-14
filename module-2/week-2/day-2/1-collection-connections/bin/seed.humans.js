require("./../config/mongo.js");

const HumanModel = require("./../models/Human");

// seed files are "standalone"
const humans = [
  { name: "Jenny", lastname: "baz" },
  { name: "Hakim", lastname: "bar" },
  { name: "Chen", lastname: "foo" },
  { name: "Gui", lastname: "nill" },
];

HumanModel.deleteMany()
  .then(
    HumanModel.insertMany(humans).then((dbSuccess) => {
      console.log(`SUCCESS ${dbSuccess.length} inserted !`);
    })
  )
  .catch((dbErr) => {
    console.log(dbErr);
  });
