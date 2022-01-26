import "./App.css";
import importedContacts from "./contacts.json";
import React, { useState } from "react";
import "./css/contacts.css";
import Contact from "./components/Contact";

const copy = importedContacts.splice(0, 5);

const App = () => {
	const [contacts, setContacts] = useState(copy);

	const addRandomContact = () => {
		//! No recursion
		// const currentIds = contacts.map((a) => a.id);
		// const pseudoRandom = importedContacts.filter((contact) => {
		// 	if (!currentIds.includes(contact.id)) {
		// 		return contact;
		// 	}
		// });
		// if (pseudoRandom === []) return;
		// const index = Math.floor(Math.random() * pseudoRandom.length);
		// let temp = [...contacts, pseudoRandom[index]];
		// // temp.push(pseudoRandom[index]);
		// setContacts(temp);

		//! The curse is on
		//? Base-case
		if (contacts.length === importedContacts.length) return;
		//? Get a random contact
		// const randomContact =
		// 	importedContacts[Math.floor(Math.random() * importedContacts.length)];
		const index = Math.floor(Math.random() * importedContacts.length);
		const randomContact = importedContacts[index];
		//? Check if we already have this contact in our state

		const alreadyExist = contacts.find(
			(contact) => contact.id === randomContact.id
		);
		if (alreadyExist) {
			addRandomContact();
		} else {
			setContacts([...contacts, randomContact]);
		}
	};

	const sortByName = () => {
		const copy = [...contacts];
		copy.sort(
			(a, b) => a.name.localeCompare(b.name)
			// return a.name < b.name;
		);
		setContacts(copy);
	};

	const sortByPopularity = () => {
		const copy = [...contacts];
		copy.sort((a, b) => {
			return b.popularity - a.popularity;
		});
		setContacts(copy);
	};

	const getRandomColorImproved = () => {
		const r = Math.floor(Math.random() * 255);
		const g = Math.floor(Math.random() * 255);
		const b = Math.floor(Math.random() * 255);
		const rgb = `rgb(${r},${g},${b})`;
		const a = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000" : "#fff";
		return [rgb, a];
	};

	const [bColor, bLum] = getRandomColorImproved();

	const handleDelete = (id) => {
		const copy = contacts.filter((contact) => contact.id !== id);
		setContacts(copy);
	};

	return (
		<>
			<div className="container">
				<h1>IronContacts</h1>
				<div className="buttonContainer">
					<button
						style={{
							backgroundColor: bColor,
							color: bLum,
						}}
						onClick={addRandomContact}>
						Add random contact
					</button>
					<button
						style={{
							backgroundColor: bColor,
							color: bLum,
						}}
						onClick={sortByName}>
						Sort by name
					</button>
					<button
						style={{
							backgroundColor: bColor,
							color: bLum,
						}}
						onClick={sortByPopularity}>
						Sort by popularity
					</button>
				</div>

				<table>
					<thead>
						<tr>
							<td>Picture</td>
							<td>Name</td>
							<td>Popularity</td>
							<td>Action</td>
						</tr>
					</thead>
					<tbody>
						{contacts.map((c) => {
							const [color, luminance] = getRandomColorImproved();
							return (
								<Contact
									contact={c}
									color={color}
									luminance={luminance}
									buttonColor={bColor}
									buttonLum={bLum}
									handleDelete={handleDelete}
								/>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default App;
