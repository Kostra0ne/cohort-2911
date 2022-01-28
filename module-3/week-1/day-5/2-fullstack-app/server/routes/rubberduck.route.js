const router = require("express").Router();
const Duck = require("../models/RubberDucks.model");

//! Routes are prefixed with /api

router.get("/rubberducks", (req, res, next) => {
	Duck.find()
		.then((dbRes) => {
			res.status(200).json(dbRes);
		})
		.catch(next);
});

router.post("/rubberducks", async (req, res, next) => {
	try {
		const createdDuck = await Duck.create(req.body);
		res.status(201).json(createdDuck);
	} catch (e) {
		next(e);
	}
});

router.get("/rubberduck/:id", async (req, res, next) => {
	try {
		const oneDuck = await Duck.findById(req.params.id);
		res.status(200).json(oneDuck);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
