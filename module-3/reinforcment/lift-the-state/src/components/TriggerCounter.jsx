import React from "react";
import Child from "./Child";

const TriggerCounter = ({ anotherProps }) => {
	return <Child callback={anotherProps} />;
};

export default TriggerCounter;
