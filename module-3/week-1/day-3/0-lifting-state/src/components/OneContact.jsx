import React from "react";

const OneContact = (props) => {
	const { name, email, deleteContact } = props;

	return (
		<p>
			<span onClick={() => deleteContact(email)} className="name">
				{name}
			</span>
			<span className="email">{email}</span>
		</p>
	);
};

export default OneContact;
