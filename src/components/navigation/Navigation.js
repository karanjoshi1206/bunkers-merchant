import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
	return (
		<>
			<div className='navBar'>
				<ul className='menu'>
					<li>
						<Link to='/home'>Home</Link>
					</li>
					<li>
						<Link to='/'>Settings</Link>
					</li>
					<li>
						<Link to='/'>History</Link>
					</li>
					<li>
						<Link to='/'>Profile</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navigation;
