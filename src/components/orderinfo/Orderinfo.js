import React from "react";
import Navigation from "../navigation/Navigation";
import "./Orderinfo.css";

const Orderinfo = () => {
	return (
		<>
			<Navigation />
			<div className='orderInfoMain'>
				<div className='orderInfoCell'>
					<h1 style={{ textAlign: "center" }}>Order info</h1>
					<div className='orderinfo'>
						<h4>Customer Id</h4>
						<p>12234</p>
					</div>
					<div className='orderinfo'>
						<h4>Order Id</h4>
						<p>99233</p>
					</div>
					<div className='orderinfo'>
						<h4>Customer name</h4>
						<p>Karan</p>
					</div>
					<div>
						<h4>Items</h4>
						<div className='itemList'>
							<div className='item'>
								<h4>Maggie</h4>
								<p>× 4</p>
							</div>
							<div className='item'>
								<h4>Noodles</h4>
								<p>× 3</p>
							</div>
							<div className='item'>
								<h4>Chai</h4>
								<p>× 2</p>
							</div>
						</div>
					</div>
					<div className='orderinfo'>
						<h4>Payment</h4>
						<p>₹ 772</p>
					</div>
					<div className='orderinfo'>
						<h4>Payment Mode</h4>
						<button className='btn-cod' disabled='disabled'>
							COD
						</button>{" "}
					</div>
				</div>
			</div>
		</>
	);
};

export default Orderinfo;
