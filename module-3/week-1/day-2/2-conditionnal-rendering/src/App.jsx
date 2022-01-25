import "./App.css";
import Weather from "./components/Weather";

function App() {
	return (
		<div className="App">
			<h1>Conditionnal rendering?!</h1>
			<Weather today="cloudy" windy={true} />
			<Weather today="sunny" windy={false} />
		</div>
	);
}

export default App;
