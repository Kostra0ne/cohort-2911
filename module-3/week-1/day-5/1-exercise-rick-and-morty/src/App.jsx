import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Routes>
				<Route />
			</Routes>
		</div>
	);
}

export default App;
