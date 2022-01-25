import Avatar from "../Avatar/Avatar";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="Navbar">
			<div>App name</div>
			<div>
				<Avatar url="https://media.comicbook.com/2021/05/harambe-meme-photo-nft-sale-auction-1270132-1280x0.jpeg" />
			</div>
		</nav>
	);
};

export default Navbar;
