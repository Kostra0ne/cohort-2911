import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";

function App() {
	return (
		<div className="App">
			<Navbar />

			<Card name="aName">
				<div className="insideCard">I am a Children!</div>
			</Card>
		</div>
	);
}

export default App;
