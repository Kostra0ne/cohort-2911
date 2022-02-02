import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OneDuck = () => {
	const [duck, setDuck] = useState(null);
	const { id } = useParams();
	const storedToken = localStorage.getItem("authToken");

	useEffect(() => {
		axios
			.get("http://localhost:8080/api/rubberduck/" + id, {
				headers: { authorization: `Bearer ${storedToken}` },
			})
			.then(({ data }) => {
				console.log(data);
				setDuck(data);
			})
			.catch((e) => console.log(e));
	}, [id, storedToken]);

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
