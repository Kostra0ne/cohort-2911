import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import About from "./Pages/About";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />

			<Routes>
				{/* HomePage */}
				<Route path="/" element={<Home />} />

				{/* About Page */}
				<Route path="/about" element={<About />} />

				{/* Contacts Page */}
				<Route path="/contact" element={<Contacts />} />
			</Routes>
		</div>
	);
}

export default App;
