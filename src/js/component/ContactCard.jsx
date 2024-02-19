import React, { useContext } from "react";
import { Context } from "../store/appContext"
import { useNavigate } from "react-router-dom";

const ContactListCard = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();



    return (

        <div className="card">
            <div className="card-header">
                Contacts
            </div>       
            <ul className="list-group list-group-flush">
                {store.contacts.map((item) => {
                    return (

                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <div className="image d-flex p-2"><i className="fas fa-user fa-5x"></i>
                                    <h2> {item.full_name}</h2>

                                </div>
                                <div className="mb-2">
                                    <span className="fw-bold"> Address <i className="fas fa-home"></i></span> {item.address}
                                </div>
                                <div className="mb-2">
                                    <span className="fw-bold"> Email <i className="fas fa-envelope"></i></span> {item.email}
                                </div>
                                <div className="mb-2">
                                    <span className="fw-bold"> Phone <i className="fas fa-phone"></i></span> {item.phone}
                                </div>
                            </div>
                            <div className="d-flex gap-1">
                            <button onClick={() => navigate(`/element/${item.id}`)} className="btn btn-warning"><i className="fas fa-edit"></i></button>

                            <button onClick={() => handleDeleteContact(item.id)} className="btn btn-danger"><i className="fas fa-trash"></i></button>
                            </div>

                        </li>
                    )
                })}
            </ul>

        </div>


    )

}

export default ContactListCard