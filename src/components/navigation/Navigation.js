import React from "react";
import "./Navigation.css";

const Navigation = () => {
	return (
		<>
			<div className='navBar'>
				<ul className='menu'>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Settings</a>
					</li>
					<li>
						<a href='#'>History</a>
					</li>
					<li>
						<a href='#'>Profile</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navigation;
