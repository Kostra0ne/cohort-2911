import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateDuckForm = () => {
	const [name, setName] = useState("");
	const [material, setMaterial] = useState("");
	const [picture, setPicture] = useState("");
	const [error, setError] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			name,
			material,
			picture,
		};

		axios
			.post("http://localhost:8080/api/rubberducks", data)
			.then((response) => {
				console.log(response);
				navigate("/list");
			})
			.catch((e) => {
				console.log(e);
				setError("There was an error, please try again");
			});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				{error !== "" && <p>{error}</p>}
				<div>
					<label htmlFor="name">name</label>
					<input
						type="text"
						id="name"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="material">material</label>
					<select
						name="material"
						id="material"
						value={material}
						onChange={(e) => setMaterial(e.target.value)}>
						<option value="gold">Gold</option>
						<option value="plastic">Plastic</option>
						<option value="wood">Wood</option>
					</select>
				</div>
				<div>
					<label htmlFor="picture">picture</label>
					<input
						type="text"
						id="picture"
						name="picture"
						value={picture}
						onChange={(e) => setPicture(e.target.value)}
					/>
				</div>

				<button>Create a duck !</button>
			</form>
		</div>
	);
};

export default CreateDuckForm;
