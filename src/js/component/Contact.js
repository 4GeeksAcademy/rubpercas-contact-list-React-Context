import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

import "../../styles/contact.css";


const Contact = ({ contact }) => {
    const { store, actions } = useContext(Context);

    const eliminarContacto = () => {
        console.log(contact)
        actions.deleteContact(contact.id);
    };

    return (
        <div className="card">
            <div className="left">
                <img src="https://cdn.pixabay.com/photo/2024/11/03/22/57/dogs-9172481_1280.jpg" className="card-image" alt="..." />
            </div>
            <div className="center">
                <span className="card-info">{contact.name}</span>
                <span className="card-info">{contact.address}</span>
                <span className="card-info">{contact.phone}</span>
                <span className="card-info">{contact.email}</span>
            </div>
            <div className="right">
                <Link to={"/editContact/" + contact.id} className="btn btn-link p-0 me-3">
                    <FontAwesomeIcon icon={faPen} style={{ color: "#000000", }} />
                </Link>
                {/* <button className="btn btn-link p-0" onClick={eliminarContacto}>
                        <i className="fa fa-trash fa-lg"></i>
                    </button> */}
                {/* <!-- Button trigger modal --> */}
                <button type="button" data-bs-toggle="modal" data-bs-target={"#delete-contact-" + contact.id} >
                    <FontAwesomeIcon icon={faTrash} style={{ color: "#000000", }} />
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id={"delete-contact-" + contact.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                If you delete this thing the etire universe will go down!
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={eliminarContacto}>Yes baby!</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <p><FontAwesomeIcon icon={faPen} style={{ color: "#000000", }} /></p>
                    <p><FontAwesomeIcon icon={faTrash} style={{ color: "#000000", }} /></p> */}
            </div>
        </div>
    )

}

export default Contact;