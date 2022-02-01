const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost/fullstack-app")
	.then((db) => console.log("DB connected"))
	.catch((e) => console.error(e));
