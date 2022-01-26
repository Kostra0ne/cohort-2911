import React from "react";
import OneContact from "./OneContact";

const ContactList = (props) => {
	const { contacts } = props;
	return (
		<>
			{contacts.length > 0 ? (
				<div className="contact-list">
					{contacts.map((contact, i) => {
						console.log(contact);
						return (
							<OneContact key={i} name={contact.name} email={contact.email} />
						);
					})}
				</div>
			) : (
				<p>No contacts yet...</p>
			)}
		</>
	);
};

export default ContactList;
