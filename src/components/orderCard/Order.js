import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./Order.scss";
const Order = ({ elem, handleShow, update }) => {
	let navigate = useNavigate();
	const [isComplete, setIsComplete] = useState(false);
	return (
		<div
			onClick={() => navigate(`/orderInfo/${elem.orderId}`)}
			key={elem.id}
			className='order'>
			<div className='orderRow'>
				<h4>Customer name</h4>
				<p>{elem.id} </p>
			</div>
			<div className='orderRow'>
				<h4>Item Name</h4>
				<p>{elem.itemName}..</p>
			</div>
			<div className='orderRow'>
				<h4>Quantity</h4>
				<p>{elem.qty}</p>
			</div>
			<div className='orderRow'>
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
				{isComplete === true ? (
					<button
						onClick={(e) => update(e)}
						className='order-complete order-complete-active'>
						<img
							style={{
								height: "20px",
								marginRight: "10px",
							}}
							src='/images/check.svg'
							alt=''
						/>
						Order completed
					</button>
				) : (
					<button
						onClick={(e) => {
							setIsComplete(true);
							update(e);
						}}
						className='order-complete'>
						<img
							style={{
								height: "20px",
								marginRight: "10px",
							}}
							src='/images/check.svg'
							alt=''
						/>
						Mark Order completed
					</button>
				)}
			</div>

			<div className='orderRow'>
				<button
					onClick={(e) => {
						e.stopPropagation();
						swal({
							icon: "success",
							title: "Order accepted",
						});
					}}
					className='order_button order_button_accept'
					// disabled='disabled'
				>
					Accept order
				</button>
				<button
					onClick={(e) => {
						handleShow(e);
					}}
					className='order_button order_button_cancel'
					// disabled='disabled'
				>
					Cancel order
				</button>
			</div>
		</div>
	);
};

export default Order;
