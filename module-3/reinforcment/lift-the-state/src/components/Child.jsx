import React from "react";
import GrandChild from "./GrandChild";
const Child = (props) => {
	return <GrandChild clbk={props.callback} />;
};

export default Child;
