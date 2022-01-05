const mongoose = require("mongoose");

// ----- Create our first Model ------->
const Cat = mongoose.model("cats", { name: String, color: String });

// --  Connect to database ---------->
mongoose
  .connect("mongodb://localhost/cats-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    // createACat("Mina", "red");
    // createACat("Fugee", "white");
    // createACat("Bob", "gray");
    findAllCats1();
  })
  .catch((err) => console.error("Error connecting to mongo", err));

// -----Use the cat Model to perform CRUD operations ------->
// Create Read Update Delete

function findAllCats() {
  Cat.find() // fetch all the documents in the targeted collection
    .then((allCats) => console.log(">>>", allCats))
    .catch((dbError) => console.error(dbError));
}

async function findAllCats1() {
  try {
    const allCats = await Cat.find(); // fetch all the documents in the targeted collection
    console.log(">>>", allCats);
  } catch (err) {
    console.error(dbError);
  }
}

function createACat(name, color) {
  Cat.create({ name, color })
    .then((dbSuccess) => {
      console.log("success !");
      console.log(dbSuccess);
    })
    .catch((dbError) => {
      console.log("failure !");
      console.error(dbError);
    });
}

async function createACat2(name, color) {
  try {
    const dbSuccess = await Cat.create({ name, color });
    console.log("success !");
    console.log(dbSuccess);
  } catch (dbError) {
    console.error(dbError);
  }
}
