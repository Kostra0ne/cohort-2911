const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcrypt");
// const SALT = 10;

router.get("/signup", (req, res, next) => {
	res.render("auth/signup");
});

router.post("/signup", async (req, res, next) => {
	console.log(req.body);
	const newUser = { ...req.body };
	//? Do we have all the informations ?
	if (!newUser.name || !newUser.email || !newUser.password) {
		console.log("We lack some infos");
		res.redirect("/signup");
	}
	try {
		//? Let's find if there is already a registered user
		const foundUser = await User.findOne({ email: newUser.email });
		console.log("Found User", foundUser);
		if (foundUser) {
			console.log("User already exist");
			res.redirect("/signin");
		} else {
			//? Everything is clear, let's hash the password and create the user
			const hashedPassword = bcrypt.hashSync(newUser.password, 10);
			console.log("Password", newUser.password);

			newUser.password = hashedPassword;
			console.log("Hashed password", newUser.password);

			const createdUser = await User.create(newUser);

			console.log(createdUser);

			res.redirect("/signin");
		}
	} catch (error) {
		console.error(error);
	}
});

router.get("/signin", (req, res, next) => {
	res.render("auth/signin");
});

router.post("/signin", async (req, res, next) => {
	try {
		const foundUser = await User.findOne({ email: req.body.email });

		if (!foundUser) {
			res.redirect("/signup");
		}

		const isSamePassword = bcrypt.compareSync(
			req.body.password,
			foundUser.password
		);

		if (!isSamePassword) {
			console.log("Credentials do not match");
			res.redirect("/signin");
		}

		const objectUser = foundUser.toObject();

		delete objectUser.password;
		req.session.currentUser = objectUser;

		console.log("Inside the session", req.session.currentUser);

		res.redirect("/");
	} catch (error) {
		console.error(error);
	}
});

router.get("/logout", (req, res) => {
	req.session.destroy();
	res.redirect("/");
});

module.exports = router;
