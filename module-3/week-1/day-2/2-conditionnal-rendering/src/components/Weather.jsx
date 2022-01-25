import React, { useState } from "react";
import Windy from "./Windy";

const Weather = ({ today, windy }) => {
	// if (today === "cloudy") {
	// 	return <div>The weather is {today}, maybe grab a scarf!</div>;
	// } else {
	// 	return <div>The weather ain't {today} but we don't know what it is...</div>;
	// }
	const [isClicked, setIsClicked] = useState(false);

	// return today === "cloudy" ? (
	// 	<>
	// 		<div>The weather is {today}, maybe grab a scarf!</div>
	// 		{windy && <Windy />}
	// 	</>
	// ) : (
	// 	<>
	// 		<div>The weather ain't {today} but we don't know what it is...</div>
	// 		{windy && <Windy />}
	// 	</>
	// );
	return (
		<>
			{today === "cloudy" && (
				<div>
					The weather is {today}, maybe grab a scarf! {windy && <Windy />}{" "}
				</div>
			)}
			{today !== "cloudy" && (
				<div>
					The weather ain't {today} but we don't know what it is...{" "}
					{windy && <Windy />}
				</div>
			)}
			<button onClick={() => setIsClicked(!isClicked)}>Surprise!</button>
			{isClicked && (
				<img
					src="https://media.istockphoto.com/vectors/surprise-gift-box-vector-id675671208"
					width={200}
				/>
			)}
		</>
	);
};

export default Weather;
