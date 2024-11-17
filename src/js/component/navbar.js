import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 mx-1">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">{store.userName} AGENDA</span>
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
