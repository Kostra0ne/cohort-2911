// https://expressjs.com/
const express = require("express");

// Import the express API into our file in order to use
// some of it's functionalities
const app = express();
// express is a function that returns an object
// that has methods that allows us to create a web server

// app.get("/",function(request,response,next){
// response.send("<h1>Hello ! </h1>")
// })

/**
 * In NodeJS, every module (file) has access to a variable
 * named __dirname,  representing the absolute path of the file currently executed
 */
console.log("Absolute path is: ", __dirname);

// Tell express where the static assets will be served from (css,images,videos,js(DOM...), not HTML 😬) in this case, the public folder
// This allows the browser to get these assets without having to ask for permissions
// and without having to create seperate routes for these type of files
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
