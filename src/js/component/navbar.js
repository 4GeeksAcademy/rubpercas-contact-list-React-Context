import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 mx-1">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">AGENDA</span>
			</Link>
			<div className="ml-auto">
				<Link to="/add">
					<button className="btn btn-success">Add new contact</button>
				</Link>
				<Link to="/user">
					<button className="btn btn-warning ms-2">Login or Create user</button>
				</Link>
			</div>
		</nav>
	);
};
