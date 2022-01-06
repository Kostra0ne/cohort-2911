const router = require("express").Router();
const Ducks = require("../models/RubberDuck.model");

/**
 * Prefixed with /ducks
 */

router.get("/:id/update", (req, res) => {
	const id = req.params.id;

	Ducks.findById(id)
		.then((foundDuck) => {
			res.render("ducks/duckUpdate.hbs", {
				duck: foundDuck,
			});
		})
		.catch((e) => console.error(e));
});

router.post("/:id/update", (req, res) => {
	const id = req.params.id;
	Ducks.findByIdAndUpdate(id, req.body, { new: true })
		.then((updatedDuck) => {
			console.log(updatedDuck);
			res.redirect("/ducks/" + id);
		})
		.catch((e) => console.error(e));
});

module.exports = router;
