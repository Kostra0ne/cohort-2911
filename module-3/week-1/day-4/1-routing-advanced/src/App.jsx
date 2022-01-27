import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contact";
import Pokemons from "./Pages/Pokemons";
import Pokemon from "./Pages/Pokemon";
import Error from "./Pages/Error";
import data from "./data.json";
import Old from "./Pages/Old";
import Parent from "./Pages/Parent";
import Child from "./Pages/Child";
import Mother from "./Pages/Mother";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contacts />} />
				<Route path="/pokemons" element={<Pokemons pokemons={data} />}>
					<Route path=":id" element={<Pokemon pokemons={data} />} />
				</Route>

				<Route path="/old" element={<Old />}>
					<Route path="parent" element={<Parent />}>
						<Route path="child" element={<Child />}></Route>
					</Route>
					<Route path="mother" element={<Mother />} />
				</Route>
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;
