import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 mx-1">
			<Link to="/">
				<span title="Go to your contact list" className="navbar-brand mb-0 h1">{store.userName} AGENDA</span>
			</Link>
			<div className="ml-auto">
				<Link to="/add">
					<button className="btn btn-success">Add new contact</button>
				</Link>
				<Link to="/user">
					<button className="btn btn-warning ms-2">Login or Create user</button>
				</Link>
				<Link to="/user">
					<button className="btn btn-danger ms-2" title="Log out" onClick={()=>actions.logOut()}><FontAwesomeIcon icon={faPowerOff} style={{color: "#ffffff",}} /></button>
				</Link>
			</div>
		</nav>
	);
};
