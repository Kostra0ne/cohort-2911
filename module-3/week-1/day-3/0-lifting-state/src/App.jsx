import "./App.css";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import { useState } from "react";

function App() {
	const [contacts, setContacts] = useState([]);

	const addContact = (contact) => {
		setContacts([...contacts, contact]);
	};

	const deleteContact = (email) => {
		setContacts(contacts.filter((contact) => contact.email !== email));
	};

	return (
		<div className="App">
			<h1>Add a contact</h1>
			<Form addSomeone={addContact} />
			<hr />
			<h2>List of contacts</h2>
			<ContactList contacts={contacts} deleteContact={deleteContact} />
		</div>
	);
}

export default App;
