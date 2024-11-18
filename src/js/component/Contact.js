import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { faPen, faTrash, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

import "../../styles/contact.css";


const Contact = ({ contact }) => {
    const { store, actions } = useContext(Context);

    const eliminarContacto = () => {
        console.log(contact)
        actions.deleteContact(contact.id, store.userName);
    };

    return (
        <div className="card mt-1">
            <div className="left">
                <img src="https://cdn.pixabay.com/photo/2024/11/03/22/57/dogs-9172481_1280.jpg" className="card-image" alt="..." />
            </div>
            <div className="center">
                <span className="card-info">{contact.name}</span>
                <span className="card-info"><FontAwesomeIcon icon={faLocationDot} style={{color: "#000000",}} /> {contact.address}</span>
                <span className="card-info"><FontAwesomeIcon icon={faPhone} style={{color: "#000000",}} /> {contact.phone}</span>
                <span className="card-info"><FontAwesomeIcon icon={faEnvelope} style={{color: "#000000",}} /> {contact.email}</span>
            </div>
            <div className="right">
                <Link to={"/editContact/" + contact.id} className="btn btn-link p-0 me-3">
                    <FontAwesomeIcon icon={faPen} style={{ color: "#000000", }} />
                </Link>

                <button className="btn btn-link p-0 me-3" type="button" data-bs-toggle="modal" data-bs-target={"#delete-contact-" + contact.id} >
                    <FontAwesomeIcon icon={faTrash} style={{ color: "#000000", }} />
                </button>


                <div className="modal fade" id={"delete-contact-" + contact.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Do you want to delete the contact?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">NO</button>
                                <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={eliminarContacto}>YES</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact;