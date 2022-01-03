const express = require("express");
const app = express();

console.log("Absolute path is: ", __dirname);

app.use(express.static(__dirname + "/public"));

app.get("/", (request, response) => {
	// response.sendFile(__dirname + "/html/index.html");
	response.render("home.hbs");
});

// Route using function keyword
// app.get('/about', function(req,res) {})

app.get("/about", (req, res) => {
	res.render("about.hbs");
	// res.sendFile(__dirname + "/html/about.html");
});

app.get("/contacts", (req, res) => {
	const users = [
		{
			name: "Bob",
			age: 31,
		},
		{
			name: "Alice",
			age: 28,
		},
		{
			name: "John",
			age: 25,
		},
	];
	const someOtherUsers = ["Armelle", "Anne", "Josse", "Chun"];

	res.render("contacts.hbs", {
		totos: users,
		someOtherUsers: someOtherUsers,
		isAdmin: true,
		hasShoes: false,
	});
});

// Fetching CSS files without express.static
// app.get("/css/style.css", (req, res) => {
// 	res.sendFile("/css/style.css");
// });
console.log("Where am I ?");
console.log("I am in the backend");

app.listen(4000);
