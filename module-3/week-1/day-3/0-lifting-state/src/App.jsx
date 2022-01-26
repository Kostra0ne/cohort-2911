import "./App.css";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import { useState } from "react";
import Search from "./components/Search";

const baseContact = [
	{
		name: "Bob",
		email: "bob@email.com",
	},
	{
		name: "John",
		email: "john@email.com",
	},
	{
		name: "Foo",
		email: "foo@email.com",
	},
	{
		name: "Bar",
		email: "bar@email.com",
	},
	{
		name: "Baz",
		email: "baz@email.com",
	},
	{
		name: "Susan",
		email: "susan@email.com",
	},
	{
		name: "Alice",
		email: "alice@email.com",
	},
];

function App() {
	const [contacts, setContacts] = useState(baseContact);
	const [searchedString, setSearchedString] = useState("");

	const addContact = (contact) => {
		setContacts([...contacts, contact]);
	};

	const deleteContact = (email) => {
		setContacts(contacts.filter((contact) => contact.email !== email));
	};

	let searchedContacts = null;
	if (searchedString !== "") {
		searchedContacts = contacts.filter((contact) => {
			return contact.name.toLowerCase().includes(searchedString.toLowerCase());
		});
	} else {
		searchedContacts = contacts;
	}

	return (
		<div className="App">
			<h1>Add a contact</h1>
			<Form addSomeone={addContact} />
			<hr />
			<h2>List of contacts</h2>
			<Search
				searchedString={searchedString}
				callbackSearch={setSearchedString}
			/>
			<ContactList contacts={searchedContacts} callbackDelete={deleteContact} />
		</div>
	);
}

export default App;
