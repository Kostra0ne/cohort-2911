import React from "react";
import "./App.css";
import Card from "./components/Card";

import something from "./assets/images/logo.svg";

function greet(name) {
	return `Hello ${name} !`;
}

const helloGui = greet("Gui");

function App() {
	const anOtherArray = [<span>1</span>, <span>2</span>, <span>3</span>];
	// A nice typed comment

	const cat = {
		name: "felix",
		age: 2,
		img: "https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
	};

	return (
		<div className="App">
			<h1
				style={{
					backgroundColor: false ? "dodgerblue" : "red",
				}}>
				Welcome to React !
			</h1>

			<h2>For images:</h2>
			<img src="/images/picture.jpeg" alt="something" />
			<img src={something} alt="" />

			<h2>Expressions:</h2>
			<p>Calculus: {2 + 2}</p>
			<p>Boolean: {false ? "yes" : "no"}</p>
			<p>A function: {greet("Toto")}</p>
			<h3>Not displayed expression:</h3>
			<p>True: {true}</p>
			<p>false: {false}</p>
			<p>undefined: {undefined}</p>
			<p>null: {null}</p>
			<p>Falsy value: {0}</p>

			<p>{helloGui}</p>
			<p>{"This is a string"}</p>
			<p>an Array:{[1, 2, 3, 4, 5, 6]}</p>
			<p>an other Array:{anOtherArray}</p>

			{/* <p>
				An object: {cat.name} {cat.age}
			</p> */}
			<p>
				Fragment:
				<React.Fragment>
					<React.Fragment>
						<React.Fragment>Hello</React.Fragment>
					</React.Fragment>
				</React.Fragment>
			</p>

			<p>
				Fragments 2:
				<>
					<>test</>
				</>
			</p>
			<h3>Let's create a cat !</h3>

			{/* Age of a cat in human age is age of the cat * 7 */}
			{/* age = 3  so => 21 */}
			{/* Display the picture, the name of the cat and his age */}
			{/* const cat = {
            name: "felix",
            age: 2,
            picture:
              "https://www.pexels.com/fr-fr/photo/chaton-gris-sur-le-sol-774731/",
        }; */}
			<div className="container">
				{/* <div className="card">
					<div className="avatar">
						<img src={cat.picture} alt={cat.name} />
					</div>
					<p>Name: {cat.name}</p>
					<p>Age in human age: {cat.age * 7}</p>
				</div>
				<div className="card">
					<div className="avatar">
						<img
							src="https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
							alt="Zouzou"
						/>
					</div>
					<p>Name: Zouzou</p>
					<p>Age in human age: 35</p>
				</div>
				<div className="card">
					<div className="avatar">
						<img src={cat.picture} alt={cat.name} />
					</div>
					<p>Name: {cat.name}</p>
					<p>Age in human age: {cat.age * 7}</p>
				</div> */}

				<Card
					name="Bob"
					age={3}
					picture="https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
				/>
				<Card />
				<Card picture={cat.img} age={cat.age} name={cat.name} />
				{/* <Card {...cat} /> */}
			</div>
		</div>
	);
}

export default App;
