const router = require("express").Router();
const Ducks = require("../models/RubberDuck.model");
//? We used mongoose to use the built-in method isValidObjectId
const mongoose = require("mongoose");

/**
 * !Here the routes are prefixed with /ducks
 */

// router.get('/mama')
//  => localhost:3000/ducks/mama

//* Then - Catch Route to retrieve all the ducks in our Database
router.get("/", (req, res) => {
	Ducks.find()
		.then((dbResponse) => {
			console.log("Database response:", dbResponse);
			res.render("ducks/ducksList.hbs", {
				ducks: dbResponse,
				css: ["ducks"],
			});
		})
		.catch((e) => console.error(e));
});

//! Using RegEx to prevent entering the route if it does not "look" like an _id
// "/:id([a-f0-9]{24})"
router.get("/:id", (req, res, next) => {
	//? req.params is an object where Express will expose key-value pair(s)
	//? Whatever is after the ":" semicolon is going to be the key and path in the
	//? Corresponding URL is going to be the value.
	console.log(req.params);

	//? using mongoose built-in method to validate if the req.params.id provided is indeed an id.
	const isValidId = mongoose.isValidObjectId(req.params.id);
	const id = req.params.id;
	if (isValidId) {
		Ducks.findById(id)
			.then((duck) => {
				console.log(duck);
				// res.send("To be continued...");
				res.render("ducks/oneDuck.hbs", {
					duck: duck,
					css: ["ducks"],
				});
			})
			.catch((e) => console.error(e));
	} else {
		//! next is a function that when executed this way let you pass the ball
		//! To the next middleware / route
		next();
	}
});

// async function deleteRubberDuck() {}
//? Executed when going to "/:id/delete"
const deleteRubberDuck = async (req, res) => {
	const id = req.params.id;
	try {
		const count = await Ducks.findByIdAndDelete(id);
		console.log("count: ", count);
		res.redirect("/ducks");
	} catch (error) {
		console.error(error);
	}
};

//? Executed when going to "/create"
const displayDuckForm = (req, res) => {
	res.render("ducks/duckCreate.hbs");
};

//? Executed when going to "/search"
const searchADuck = async (req, res) => {
	console.log(req.query);
	//? req.query is an empty object that will be filled if there is a visible payload in the URL.
	//? The key(s) will be the name of the input(s) the value will be the value(s) of the respectives input(s)
	const searchedDucks = await Ducks.find({ color: req.query.q });

	res.render("home", {
		searchedDucks,
		css: ["ducks"],
	});
};

router.get("/:id/delete", deleteRubberDuck);
router.get("/create", displayDuckForm);
router.get("/search", searchADuck);

//! CREATE Router.
router.post("/create", (req, res) => {
	console.log(req.body);
	//! The tedious way to assign values from an object
	// const name = req.body.name
	// const color = req.body.color
	// const material = req.body.material
	// const age = req.body.age
	// const picture = req.body.picture
	//! Destructuring syntax, getting all the keys from req.body
	const { name, color, material, age, picture } = req.body;
	// Ducks.create({
	// 	name,
	// 	color,
	// 	material,
	// 	age,
	// 	picture
	// })

	Ducks.create(req.body)
		.then((newDuck) => {
			console.log("Newduck: ", newDuck);
			res.redirect("/ducks");
		})
		.catch((e) => console.error(e));

	// res.send("not finished yet");
});

module.exports = router;
