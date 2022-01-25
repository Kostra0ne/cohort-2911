import "./App.css";
import BasicList from "./components/BasicList/BasicList";
import pokemons from "./pokemons";

function App() {
	return (
		<div className="App">
			<h1>Loops !</h1>
			<BasicList pokemons={pokemons} />
		</div>
	);
}

export default App;
