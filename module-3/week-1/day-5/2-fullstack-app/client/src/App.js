import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import RubberDuckList from "./Pages/RubberDuckList";
import CreateDuckForm from "./Pages/CreateDuckForm";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/list" element={<RubberDuckList />} />
				<Route path="/create" element={<CreateDuckForm />} />
			</Routes>
		</div>
	);
}

export default App;
