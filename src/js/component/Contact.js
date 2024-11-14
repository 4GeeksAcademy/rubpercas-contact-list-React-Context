import React from "react";
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../../styles/contact.css";

const Contact = () => {
    return (
        <div className="card">
            <div className="left">
                <img src="..." className="image-card" alt="..." />
            </div>
            <div className="center">
                <p>NAME</p>
                <span>ADDRESS</span>
                <span>PHONE</span>
                <span>EMAIL</span>
            </div>
            <div className="right">
                <p><FontAwesomeIcon icon={faPen} style={{color: "#000000",}} /></p>
                <p><FontAwesomeIcon icon={faTrash} style={{color: "#000000",}} /></p>
            </div>
        </div>
    )

}

export default Contact;