import React, { useEffect, useState } from "react";
import axios from "axios";

const RubberDuckList = () => {
	const [ducks, setDuck] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8080/api/rubberducks")
			.then(({ data }) => {
				console.log(data);
				setDuck(data);
			})
			.catch((e) => console.log(e));
	}, []);

	return (
		<>
			<h1>Rubber ducks list</h1>
			<ul>
				{ducks.map((duck) => {
					return (
						<li key={duck._id}>
							<p>{duck.name}</p>
							<img src={duck.picture} alt={duck.name} />
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default RubberDuckList;
