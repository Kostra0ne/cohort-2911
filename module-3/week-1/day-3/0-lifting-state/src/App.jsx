import "./App.css";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import { useState } from "react";

function App() {
	const [contacts, setContacts] = useState([]);

	const addContact = (contact) => {
		setContacts([...contacts, contact]);
	};

	return (
		<div className="App">
			<h1>Add a contact</h1>
			<Form addSomeone={addContact} />
			<hr />
			<h2>List of contacts</h2>
			<ContactList contacts={contacts} />
		</div>
	);
}

export default App;
