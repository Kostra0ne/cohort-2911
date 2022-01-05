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

    // findSomeCats();
    // findCatById("61d5747823a65bd17a1d1d47");
    // findOneCatWithSearchCriterion({ name: "Bob" });

    modifyOneCat();

    // deleteACatByID("61d574a08b45f9132deada5e");
    // deleteACat()
  })
  .catch((err) => console.error("Error connecting to mongo", err));

// -----Use the cat Model to perform CRUD operations ------->
// Create Read Update Delete

// *************** CREATE **********************

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

// *************** READ **********************
function findAllCats() {
  Cat.find() // fetch all the documents in the targeted collection
    .then((allCats) => console.log(">>>", allCats))
    .catch((dbError) => console.error(dbError));
}

function findSomeCats() {
  Cat.find({ $and: [{ name: "Bob" }, { color: "gray" }] })
    .then((bobs) => console.log(">> bobs ??? >>", bobs))
    .catch((dbError) => console.error(dbError));
}

function findCatById(catsId) {
  Cat.findById(catsId) // fetch all the documents in the targeted collection
    .then((cat) => console.log(">> do we have a match ??? >>", cat))
    .catch((dbError) => console.error(dbError));
}

function findOneCatWithSearchCriterion(query) {
  Cat.findOne(query) // fetch all the documents in the targeted collection
    .then((aCat) => console.log(">> : ) >>", aCat))
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

// *************** UPDATE **********************
async function modifyOneCat() {
  try {
    const found = await Cat.findOneAndUpdate(
      { name: "Mina real update" },
      { name: "Mina real real real update" },
      { new: true }
    );
    console.log("found ???", found);
  } catch (err) {
    console.error(err);
  }
}

// *************** DELETE **********************
function deleteACatByID(id) {
  Cat.findByIdAndDelete(id)
    .then((dbRes) => {
      console.log("deleted cat ?", dbRes);
    })
    .catch((err) => console.error(err));
}

function deleteACat() {
  Cat.findOneAndRemove({ name: "Mina" })
    .then((dbRes) => {
      console.log("deleted cat ?", dbRes);
    })
    .catch((err) => console.error(err));
}
