import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext.js";
import Contact from "../component/Contact";

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context)
	console.log(store.contactList)
	return (
		
		<div className="w-75 mx-auto">
            <div className="d-flex justify-content-end">
                <Link to="/add">
                    <button className="btn btn-success">Add New contact</button>
                </Link>
            </div>
            <ul className="list-group mt-3">
                {store.contactList && store.contactList.length > 0 && store.contactList.map((contact, index) => {
                    return (
                        <Contact contact={contact} key={index} />
                    )
                })}
            </ul>
        </div>
	)
};


