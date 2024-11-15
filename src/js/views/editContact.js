// import React, { useContext } from "react";
// import { Link, useNavigate } from 'react-router-dom';
// import { Context } from "../store/appContext.js";

// export const EditContact = () => {
//     const { store, actions } = useContext(Context)
//     let navigate = useNavigate();

//     return (
//         <div className="container-form d-flex align-items-center justify-content-center">
//             <h4 className="text-center mt-2">Update contact</h4>
//             <form>
//                 <div className="mb-3">
//                     <label className="form-label">Full name</label>
//                     <input type="text" className="form-control" id="exampleInputText" placeholder="Full name" onChange={(e) => setName(e.target.value)} value={name} />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Email</label>
//                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Phone</label>
//                     <input type="text" className="form-control" id="exampleInputText1" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} value={phone} />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Address</label>
//                     <input type="text" className="form-control" id="exampleInputText2" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address} />
//                 </div>
//                 <button type="button" className="btn btn-primary">Update Contact</button>
//                 <div className="mb-3">
//                     <Link to="/">
//                         <span className="ms-2">or get back to contacts</span>
//                     </Link>
//                 </div>
//             </form >
//         </div >
//     )
// }
