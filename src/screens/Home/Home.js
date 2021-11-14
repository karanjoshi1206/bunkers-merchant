import React, { useState, useEffect } from "react";
import "./Home.css";
import "./data";
import data from "./data.js";
import Navigation from "../../components/navigation/Navigation";
const Home = () => {
	const [orderData, setOrderData] = useState(data);
	// useEffect(() => {
	// 	setOrderData(data);
	// 	return () => {
	// 		console.log("hello");
	// 	};
	// }, []);
	const update = () => {
		alert("Success!!");
	};
	return (
		<>
			<Navigation />
			<div className='main'>
				<h3 className='main_heading'>Orders</h3>
				<div className='orders'>
					{orderData?.map((elem) => {
						return (
							<div key={elem.id} className='order'>
								<div className='row'>
									<h4>Customer name</h4>
									<p>{elem.id} </p>
								</div>
								<div className='row'>
									<h4>Item Name</h4>
									<p>{elem.itemName} </p>
								</div>
								<div className='row'>
									<h4>Quantity</h4>
									<p>{elem.qty}</p>
								</div>
								<div className='row'>
									<h4>Payment mode</h4>

									{elem.paymentMode === "cod" ? (
										<button className='btn-cod' disabled='disabled'>
											COD
										</button>
									) : (
										<button className='btn-online' disabled='disabled'>
											Online
										</button>
									)}
								</div>
								<div>
									<button onClick={() => update()} className='order-complete'>
										<i className='far fa-check-circle'></i>
										Mark Order completed
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Home;
