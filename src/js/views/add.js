import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Context } from "../store/appContext.js";

export const Add = () => {
    const { store, actions } = useContext(Context)
    let navigate = useNavigate();
    const { id } = useParams();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    function guardarContacto(e) {
        e.preventDefault()
        if (name.trim() == "" || phone.trim() == "" || email.trim() == "" || address.trim() == "") {
            alert("Empty fields")
            return null
        }
        const payload = {
            name: name,
            phone: phone,
            email: email,
            address: address
        };
        if (!id) {
            actions.createContact(payload, store.userName)
        } else {
            actions.editContact(id, payload, store.userName)
        }
        navigate("/");
        setName("");
        setPhone("");
        setEmail(""),
            setAddress("");

    }

    useEffect(() => {
        if (id && store.contactList.length > 0) {
            const currentContact = store.contactList.find(contact => contact.id == id)
            setName(currentContact.name)
            setPhone(currentContact.phone)
            setEmail(currentContact.email)
            setAddress(currentContact.address)
        }
    }, [id, store.contactList])
    return (
        <div className="container-form d-flex align-items-center justify-content-center">
            <form className="w-75" onSubmit={guardarContacto}>
                <h4 className="text-center mt-2">{!id ? "Add New Contact" : `Editing ${name}`}</h4>
                <div className="mb-3">
                    <label className="form-label">Full name</label>
                    <input type="text" className="form-control" id="exampleInputText" placeholder="Full name" onChange={(e) => setName(e.target.value)} value={name} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" id="exampleInputText1" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} value={phone} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputText2" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address} required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Save</button>
                <div className="mb-3">
                    <Link to="/">
                        <span className="ms-2">or get back to contacts</span>
                    </Link>
                </div>
            </form >
        </div >
    )
}

