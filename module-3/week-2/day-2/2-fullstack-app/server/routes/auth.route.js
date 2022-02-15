const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const isAuthenticated = require("../middlewares/jwt.middleware");
const User = require("../models/User.model");
const saltRounds = 10;

router.post("/signup", async (req, res, next) => {
	const { name, email, password } = req.body;
	console.log(req.body);
	if (email === "" || name === "" || password === "") {
		res
			.status(400)
			.json({ message: "I need some informations to work with here!" });
	}
	try {
		const foundUser = await User.findOne({ email });
		if (foundUser) {
			res
				.status(400)
				.json({ message: "There's another one of you, somewhere." });
			return;
		}
		const salt = bcrypt.genSaltSync(saltRounds);
		const hashedPass = bcrypt.hashSync(password, salt);

		const createdUser = await User.create({
			name,
			email,
			password: hashedPass,
		});

		const user = createdUser.toObject();
		delete user.password;

		// ! Sending the user as json to the client
		res.status(201).json({ user });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Sweet, sweet 500." });
	}
});

router.post("/login", async (req, res, next) => {
	const { email, password } = req.body;

	try {
		const foundUser = await User.findOne({ email });
		if (!foundUser) {
			res.status.apply(401).json({ message: "You're not yourself." });
			return;
		}
		const goodPass = bcrypt.compareSync(password, foundUser.password);
		if (goodPass) {
			const user = foundUser.toObject();
			delete user.password;

			/**
			 * Sign method allow you to create the token.
			 *
			 * ---
			 *
			 * - First argument: user, should be an object. It is our payload !
			 * - Second argument: A-really-long-random-string...
			 * - Third argument: Options...
			 */

			const authToken = jwt.sign(user, process.env.TOKEN_SECRET, {
				algorithm: "HS256",
				expiresIn: "6d",
			});

			//! Sending the authToken to the client !

			res.status(200).json({ authToken });
		} else {
			res.status(401).json("Can you check your typos ?");
		}
	} catch (error) {
		console.log(error);
		res
			.status(500)
			.json({ message: "Oh noes ! Something went terribly wrong !" });
	}
});

router.get("/me", isAuthenticated, (req, res, next) => {
	console.log("req payload", req.payload);
	res.status(200).json(req.payload);
});

module.exports = router;
