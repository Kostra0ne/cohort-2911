const { Mongoose } = require("mongoose");

require("../config/dbCconfig");

const Duck = require("../models/RubberDucks.model");

const ducks = [
	{
		name: "Bob",
		material: "wood",
		picture:
			"https://amsterdamduckstore.com/wp-content/uploads/2019/08/Love-you-rubber-duck-front-Amsterdam-Duck-Store.jpg",
	},
	{
		name: "Susan",
		material: "plastic",
		picture:
			"https://amsterdamduckstore.com/wp-content/uploads/2021/01/Wellness-rubber-duck-front-Amsterdam-Duck-Store-400x400.jpg",
	},
	{
		name: "Joe",
		material: "gold",
		picture:
			"https://amsterdamduckstore.com/wp-content/uploads/2020/01/Duck-You-rubber-duck-front-Amsterdam-Duck-Store-400x400.jpg",
	},
	{
		name: "Toto",
		material: "gold",
		picture:
			"https://amsterdamduckstore.com/wp-content/uploads/2015/09/liberty-rubber-duck-front-e1569407748113-400x400.jpg",
	},
];

Duck.create(ducks)
	.then((response) => {
		console.log("created " + response.length + "ducks !");
		process.exit();
	})
	.catch((e) => console.log(e));
