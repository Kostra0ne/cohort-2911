import React, { useState } from "react";

const Form = ({ addSomeone }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const contact = { name: name, email };
		console.log(contact);
		addSomeone(contact);
		setName("");
		setEmail("");
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<label htmlFor="name">name</label>
			<input
				type="text"
				name="name"
				id="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<label htmlFor="email">email</label>
			<input
				type="text"
				name="email"
				id="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>

			<button>Add contact</button>
		</form>
	);
};

export default Form;
