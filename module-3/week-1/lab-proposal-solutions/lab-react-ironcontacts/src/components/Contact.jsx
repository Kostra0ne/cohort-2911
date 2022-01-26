import React from "react";

const Contact = (props) => {
	const { contact, color, luminance, buttonColor, buttonLum, handleDelete } =
		props;

	const deleteMe = () => {
		handleDelete(contact.id);
	};

	return (
		<>
			<tr
				key={contact.id}
				style={{
					backgroundColor: color,
					color: luminance,
				}}>
				<td>
					<img src={contact.pictureUrl} alt="" />
				</td>
				<td>{contact.name}</td>
				<td>{contact.popularity.toFixed(2)}</td>
				<td>
					<button
						style={{
							backgroundColor: buttonColor,
							color: buttonLum,
						}}
						onClick={deleteMe}>
						Delete
					</button>
				</td>
			</tr>
		</>
	);
};

export default Contact;
