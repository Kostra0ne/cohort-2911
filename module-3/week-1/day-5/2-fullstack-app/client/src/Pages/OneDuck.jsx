import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OneDuck = () => {
	const [duck, setDuck] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get("http://localhost:8080/api/rubberduck/" + id)
			.then(({ data }) => {
				console.log(data);
				setDuck(data);
			})
			.catch((e) => console.log(e));
	}, []);

	return (
		<>
			{duck ? (
				<>
					<p>{duck.name}</p>
					<img src={duck.picture} alt="" />
				</>
			) : (
				<p>No duck</p>
			)}
		</>
	);
};

export default OneDuck;
