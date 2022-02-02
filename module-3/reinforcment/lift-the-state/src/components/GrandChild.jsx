import React from "react";

const GrandChild = (props) => {
	return (
		<button onClick={() => props.clbk((prevState) => prevState + 1)}>
			Increment
		</button>
	);
};
export default GrandChild;
