import "./Avatar.css";

const Avatar = (props) => {
	return (
		<div className="Avatar">
			<img src={props.url} alt="" className="Avatar-img" />
		</div>
	);
};

export default Avatar;
