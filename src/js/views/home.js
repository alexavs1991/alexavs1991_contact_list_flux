import React from "react";
import ContactListCard from "../component/ContactCard.jsx";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const navigate = useNavigate();
	
	return (
		<div className="container p-5">
			  <div className="d-flex m-2 justify-content-end">
			  <button onClick={() => navigate("/addcontact")} className="btn btn-success">Add New Contact</button>
            </div>
			<ContactListCard/>
		</div>
	)
	}

export default Home