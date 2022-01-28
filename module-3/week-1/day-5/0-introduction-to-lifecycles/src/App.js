import "./App.css";
import { useState } from "react";
import Counter from "./Components/Counter";

function App() {
	const [showCounter, setShowCounter] = useState(false);
	return (
		<div className="App">
			<button onClick={() => setShowCounter(!showCounter)}>
				{showCounter ? "Hide" : "Show"} the counter
			</button>
			<div>{showCounter && <Counter />}</div>
		</div>
	);
}

export default App;
