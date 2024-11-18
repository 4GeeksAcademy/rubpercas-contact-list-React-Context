import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import Contact from "../component/Contact";

import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context)
    console.log(store.contactList)
    return (
        <div>
            <h1 className="text-center mb-2">YOUR LIST CONTACT</h1>
            <div className="d-flex justify-content-center align-items-center">
                <ul className="list-group mt-3 w-50">
                    {store.contactList.length > 0 ? (
                        store.contactList.map((contact, index) => (
                            <Contact key={index} contact={contact} />
                        ))
                    ) : (
                        <h1 className="text-center mb-2 mt-5">Your contact list is empty. Add some new contacts.</h1>
                    )}
                    {/* {store.contactList && store.contactList.length > 0 && store.contactList.map((contact, index) => {
                        return (
                            <Contact contact={contact} key={index} />
                        )
                    })} */}
                </ul>
            </div>
        </div>
    )
};


