const express = require("express");
const app = express();
const PORT = 4000;
const hbs = require("hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	res.render("home", {
		css: ["home.css"],
		admin: {
			name: "Pauline",
			picture: "https://randomuser.me/api/portraits/women/79.jpg",
		},
	});
});

app.get("/users", (req, res) => {
	const users = [
		{
			name: "Bob",
			age: 71,
			picture: "https://randomuser.me/api/portraits/men/37.jpg",
		},
		{
			name: "Alice",
			age: 26,
			picture: "https://randomuser.me/api/portraits/women/75.jpg",
		},
		{
			name: "John",
			age: 32,
			picture: "https://randomuser.me/api/portraits/men/5.jpg",
		},
	];
	// x = x + 1
	// x += 1
	// users: users
	res.render("users", {
		users,
		css: ["users.css"],
	});
});

app.get("/about", (req, res) => {
	res.render("about", {
		css: ["about.css", "users.css"],
	});
});

app.listen(PORT, () => console.log(`Server 🏃 at http://localhost:${PORT}`));
