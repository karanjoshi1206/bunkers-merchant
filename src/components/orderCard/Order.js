import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./Order.scss";
// import "../orderinfo/Orderinfo.scss";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

const Order = ({ elem, handleShow, update }) => {
	// let navigate = useNavigate();
	const [isComplete, setIsComplete] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const showOrderData = () => {
		console.log("runs");
		setIsVisible(true);
	};
	return (
		<>
			<Rodal visible={isVisible} onClose={() => setIsVisible(false)}>
				<div className='modal_div'>
					<h1 style={{ textAlign: "center" }}>Order info</h1>
					<div className='orderinfo'>
						<h4>Customer Id</h4>
						<p>12234</p>
					</div>
					<div className='orderinfo'>
						<h4>Order Id</h4>
						<p>133</p>
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
							</div>{" "}
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
			</Rodal>

			<div onClick={() => showOrderData()} key={elem.id} className='order'>
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
		</>
	);
};

export default Order;
