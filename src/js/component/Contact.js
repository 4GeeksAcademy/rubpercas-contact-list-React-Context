import React from "react";
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../../styles/contact.css";

const Contact = () => {
    return (
        <div className="card">
            <div className="left">
                <img src="https://cdn.pixabay.com/photo/2024/11/03/22/57/dogs-9172481_1280.jpg" className="card-image" alt="..." />
            </div>
            <div className="center">
                <span className="card-info">NAME</span>
                <span className="card-info">ADDRESS</span>
                <span className="card-info">PHONE</span>
                <span className="card-info">EMAIL</span>
            </div>
            <div className="right">
                <p><FontAwesomeIcon icon={faPen} style={{color: "#000000",}} /></p>
                <p><FontAwesomeIcon icon={faTrash} style={{color: "#000000",}} /></p>
            </div>
        </div>
    )

}

export default Contact;