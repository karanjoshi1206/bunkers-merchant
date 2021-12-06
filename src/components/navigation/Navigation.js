import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const handleOpen = (e) => {
		e.preventDefault();
		setMenuOpen(!menuOpen);
		// setActiveClass(activeClass === "" ? "active" : "");
	};
	return (
		<>
			<div className='navBar'>
				<div className='logo_container'>
					<img src='/logo.png' alt='' />
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
