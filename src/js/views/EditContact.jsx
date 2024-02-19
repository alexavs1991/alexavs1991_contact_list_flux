import React, { useState, useContext } from "react";
import { Context } from "../store/appContext"


const formState = {
    full_name: "",
    email: "",
    agenda_slug: "alexa_agenda",
    address: "",
    phone: "",

}


const EditContact = ({ contact }) => {
    const [inputValue, setInputValue] = useState(contact || formState);
    const { actions } = useContext(Context)

    const handleChange = (event) => {
        setInputValue({ ...inputValue, [event.target.name]: event.target.value });
    }

    return (
        <div className="container d-flex justify-content-center h-100" >
            <div className="glass my-5 p-4 d-flex flex-column slign-items-center gap-3 w-75">
                <h2 className="fw-bold">Edit Contact</h2>

                <form action="" className="row w-100 mb-3">
                    <div className="d-flex flex-column">
                        <label className="form-label fw-bold">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            name="full_name"
                            value={inputValue.full_name}
                            onChange={(event) => handleChange(event)}
                        />

                        <div className="d-flex flex-column">
                            <label className="form-label fw-bold">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="example@example.com"
                                name="email"
                                value={inputValue.email}
                                onChange={(event) => handleChange(event)}
                            />
                            <div className="d-flex flex-column">
                                <label className="form-label fw-bold">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Home Address"
                                    name="address"
                                    value={inputValue.address}
                                    onChange={(event) => handleChange(event)}
                                />
                                <div className="d-flex flex-column">
                                    <label className="form-label fw-bold">Phone Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="+00 000 00 00"
                                        name="phone"
                                        value={inputValue.phone}
                                        onChange={(event) => handleChange(event)}
                                    />

                                </div>
                                <div className="d-flex justify-content-lg-center">
                                    <button
                                        onClick={() => actions.addNewContact(inputValue)}
                                        className="w-25 btn btn-success my-4">Submit
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>




    )
}

export default EditContact