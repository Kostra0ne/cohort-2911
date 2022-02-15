import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TriggerCounter from "./components/TriggerCounter";
import DisplayCounter from "./components/DisplayCounter";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<DisplayCounter someProps={count} />

			<TriggerCounter anotherProps={setCount} />
		</div>
	);
}

export default App;
