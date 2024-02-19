import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const formState = {
    full_name: "",
    email: "",
    address: "",
    phone: "",
};

const AddContact = () => {
    const { actions } = useContext(Context);
    const [inputValue, setInputValue] = useState(formState);

    const handleChange = (event) => {
        setInputValue({ ...inputValue, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await actions.addContact(inputValue);
        setInputValue(formState); 
    };

    return (
        <div className="container d-flex justify-content-center h-100">
            <div className="glass my-5 p-4 d-flex flex-column align-items-center gap-3 w-75">
                <h2 className="fw-bold">Add Contact</h2>
                <form onSubmit={handleSubmit} className="row w-100 mb-3">
                    <div className="d-flex flex-column">
                        <label className="form-label fw-bold">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            name="full_name"
                            value={inputValue.full_name}
                            onChange={handleChange}
                        />
                        <label className="form-label fw-bold">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="example@example.com"
                            name="email"
                            value={inputValue.email}
                            onChange={handleChange}
                        />
                        <label className="form-label fw-bold">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Home Address"
                            name="address"
                            value={inputValue.address}
                            onChange={handleChange}
                        />
                        <label className="form-label fw-bold">Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="+00 000 00 00"
                            name="phone"
                            value={inputValue.phone}
                            onChange={handleChange}
                        />
                        <div className="d-flex justify-content-lg-center">
                            <button type="submit" className="w-25 btn btn-success my-4">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddContact;
