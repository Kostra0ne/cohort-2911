const express = require("express");

const app = express();

const PORT = 4000;
const hbs = require("hbs");

// You will need to "Register" your partials, you tell hbs where to look for them 🕵️‍♂️
hbs.registerPartials(__dirname + "/views/partials");

// Setting the view engine for express to know he is serving hbs files
app.set("view engine", "hbs");

/** https://expressjs.com/en/starter/static-files.html  */
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
	// When a key and a variable have the same name, you can on certain instance
	// Omit the value and just put one keyword, the key (Who has the same name as the variable)
	// {users: users}   =>   {users}
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
