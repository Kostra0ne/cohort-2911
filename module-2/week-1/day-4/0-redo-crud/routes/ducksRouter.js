const router = require("express").Router();
const Ducks = require("../models/RubberDuck.model");
const mongoose = require("mongoose");
const Duck = require("../models/RubberDuck.model");
/**
 * !Here the routes are prefixed with /ducks
 */

// router.get('/mama')
// localhost:3000/ducks/mama

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

//! Using RegEx to prevent entering the route.
// "/:id([a-f0-9]{24})"
router.get("/:id", (req, res, next) => {
	console.log(req.params);
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
		next();
	}
});

// async function deleteRubberDuck() {}

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

const displayDuckForm = (req, res) => {
	res.render("ducks/duckCreate.hbs");
};

const searchADuck = async (req, res) => {
	console.log(req.query);
	const searchedDucks = await Ducks.find({ color: req.query.q });

	res.render("home", {
		searchedDucks,
		css: ["ducks"],
	});
};

router.get("/:id/delete", deleteRubberDuck);
router.get("/create", displayDuckForm);
router.get("/search/", searchADuck);

//! CREATE Router.
router.post("/create", (req, res) => {
	console.log(req.body);
	// const name = req.body.name
	// const color = req.body.color
	// const material = req.body.material
	// const age = req.body.age
	// const picture = req.body.picture
	const { name, color, material, age, picture } = req.body;
	// Ducks.create({
	// 	name,
	// 	color,
	// 	material,
	// 	age,
	// 	picture
	// })

	Duck.create(req.body)
		.then((newDuck) => {
			console.log("Newduck: ", newDuck);
			res.redirect("/ducks");
		})
		.catch((e) => console.error(e));

	// res.send("not finished yet");
});

module.exports = router;
