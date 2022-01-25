import "./App.css";
import { useState } from "react";

// This is too set a state using a function that is intensive to compute
function calculateSomething() {
	return "Hellow";
}

function App() {
	const [superIntensive, setSuperIntensive] = useState(calculateSomething);

	// useState can be an array, an object, a string, a boolean, null, undefined, anything :)
	// const [counts, setCounts] = useState({ count1: 0, count2: 3 });
	const [color, setColor] = useState("blue");
	console.log("The state: ", counts);

	// const handleClick = (action) => {
	// 	return () => {
	// 		setCounts((prevCount) => prevCount + 1);

	// 		// : setCount(count - 1);
	// 	};
	// };

	// DO NOT mutate the state.

	return (
		<div
			className="App"
			style={{
				backgroundColor: color,
			}}>
			<h1>State in React ! </h1>
			<h2>The count1 is: {counts.count1}</h2>

			{/* ! To update an object, you can't forget any of the keys ! that is why 
      We're spreading the counts object.*/}

			{/* <button
				onClick={() => {
					setCounts({
						...counts,
						count1: counts.count1 + 1,
					});
				}}>
				Increment me !
			</button> */}

			{/* Those handleClicks are a closure, they are returning a function 
          That use the argument(s) provided by the wrapping function
          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
      */}
			<button onClick={handleClick("increment")}>Increment me !</button>
			<button onClick={handleClick("decrement")}>Decrement me !</button>

			{/* Unused buttons but left for references */}

			{/* <h2>The count2 is: {counts.count2}</h2>
			<button onClick={handleClick('increment')}>Increment me !</button>
			<button onClick={handleClick('increment')}>Decrement me !</button> */}
			{/* <button onClick={() => setCount(count + 1)}>Increment me !</button>
			<button onClick={() => setCount((prevCount) => prevCount - 1)}>
				Decrement me !
			</button> */}

			{/* You can have clickEvent on any HTML tag */}
			<p onClick={() => setColor("dodgerblue")}>
				Click me to change the color !
			</p>
			<p onClick={() => {}}>Mutations !</p>
		</div>
	);
}

export default App;
