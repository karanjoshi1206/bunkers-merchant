import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const handleOpen = (e) => {
		e.preventDefault();
		setMenuOpen(!menuOpen);
		// setActiveClass(activeClass === "" ? "active" : "");
	};
	let navigate = useNavigate();
	return (
		<>
			<div className='navBar'>
				<div onClick={() => navigate("/")} className='logo_container'>
					<img src='/logo.png' alt='' />
					<h1>BUNKERS</h1>
				</div>
				<ul className={`menu ${menuOpen === true ? "" : "active"}`}>
					<li onClick={(e) => handleOpen(e)}>
						<Link to='/home'>Home</Link>
					</li>
					<li onClick={(e) => handleOpen(e)}>
						<Link to='/'>Settings</Link>
					</li>
					<li onClick={(e) => handleOpen(e)}>
						<Link to='/'>History</Link>
					</li>
					<li onClick={(e) => handleOpen(e)}>
						<Link to='/'>Profile</Link>
					</li>
				</ul>
				<div
					onClick={(e) => handleOpen(e)}
					id='hamBurger'
					className='hamBurger'>
					<div className={`line1 ${menuOpen === true ? "active" : ""}`}></div>
					<div className={`line2 ${menuOpen === true ? "active" : ""}`}></div>
					<div className={`line3 ${menuOpen === true ? "active" : ""}`}></div>
				</div>
			</div>
		</>
	);
};

export default Navigation;
