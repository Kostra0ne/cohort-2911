import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import useAuth from "../Auth/useAuth";

const RubberDuckList = () => {
	const [ducks, setDuck] = useState([]);
	const auth = useAuth();
	console.log(auth);
	const storedToken = localStorage.getItem("authToken");

	useEffect(() => {
		axios
			.get("http://localhost:8080/api/rubberducks", {
				headers: { authorization: `Bearer ${storedToken}` },
			})
			.then(({ data }) => {
				console.log(data);
				setDuck(data);
			})
			.catch((e) => console.log(e));
	}, []);

	return (
		<>
			<h1>Rubber ducks list</h1>
			<div className="container">
				{ducks.map((duck) => {
					return (
						<div className="card" key={duck._id}>
							<Link to={duck._id}>{duck.name}</Link>
							<div className="wrapperDuck">
								<img src={duck.picture} alt={duck.name} />
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default RubberDuckList;
