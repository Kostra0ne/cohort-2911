import React from "react";

const OneContact = (props) => {
	const { name, email, deleteContact } = props;
	console.log(props);
	return (
		<p onClick={() => deleteContact(email)}>
			<span className="name">{name}</span>
			<span className="email">{email}</span>
		</p>
	);
};

export default OneContact;
