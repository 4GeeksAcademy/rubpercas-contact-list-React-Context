import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
    return (
        <div className="container-form d-flex align-items-center justify-content-center">
            <form>
                <h4 className="text-center mt-2">Add a new contact</h4>
                <div className="mb-3">
                    <label className="form-label">Full name</label>
                    <input type="text" className="form-control" id="exampleInputText" placeholder="Full name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" id="exampleInputText1" placeholder="Phone" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputText2" placeholder="Address" />
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

export default Form