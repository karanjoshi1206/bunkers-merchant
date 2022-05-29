import React, { useState } from "react";
import swal from "sweetalert";
import "./Order.scss";
import { Bars } from "react-loader-spinner";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import "../orderinfo/Orderinfo.scss";
import axios from "axios";
const Order = ({ elem, handleShow, setRefresh, refresh, page = "" }) => {
	console.log(page);
	const [isVisible, setIsVisible] = useState(false);
	const [loading, setIsLoading] = useState(false);
	const [cancelledLoading, setCancelledLoading] = useState(false);
	const [acceptLoading, setAcceptLoading] = useState(false);
	const showOrderData = () => {
		setIsVisible(true);
	};

	const updateStatus = async (e, orderStatus) => {
		console.log("order", orderStatus);
		e.stopPropagation();
		try {
			let data = await axios.patch(
				`https://bunker-api-staging.herokuapp.com/orders/${elem._id}`,
				{
					status: orderStatus,
				}
			);

			swal({
				icon: "success",
				title: `Order ${orderStatus}`,
			});
			console.log("data is ", data);
			setRefresh(!refresh);
			setIsLoading(false);
			setCancelledLoading(false);
			setAcceptLoading(false);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
			setCancelledLoading(false);
			setAcceptLoading(false);
		}
	};
	return (
		<>
			<Rodal visible={isVisible} onClose={() => setIsVisible(false)}>
				<div className='modal_div'>
					<h1 style={{ textAlign: "center" }}>Order info</h1>
					<div className='orderinfo'>
						<h4>Customer name</h4>
						<p>{elem.name}</p>
					</div>
					<div className='orderinfo'>
						<h4>Item Id</h4>
						<p>{elem.product}</p>
					</div>
					<div className='orderinfo'>
						<h4>Item name</h4>
						<p>{elem.productName}</p>
					</div>
					<div className='orderinfo'>
						<h4>Item Id</h4>
						<p>{elem._id}</p>
					</div>
					<div className='orderinfo'>
						<h4>Quantity</h4>
						<p>{elem.quantity}</p>
					</div>
					{elem.paymentmode && (
						<div className='orderRow'>
							<h4>Payment mode</h4>

							<button className='btn-online' disabled='disabled'>
								{elem.paymentmode}
							</button>
						</div>
					)}
				</div>
			</Rodal>

			<div
				onClick={() => showOrderData()}
				key={elem.id}
				className={`order ${elem.status === "cancelled" ? "cancelled" : ""} ${
					elem.status === "completed" ? "completed" : ""
				}`}>
				<div className='orderRow'>
					<h4>Customer name</h4>
					<p>{elem.name} </p>
				</div>
				<div className='orderRow'>
					<h4>Item Name</h4>
					<p>{elem.productName}</p>
				</div>
				<div className='orderRow'>
					<h4>Quantity</h4>
					<p>x {elem.quantity}</p>
				</div>
				<div className='orderRow'>
					<h4>Price</h4>
					<p>₹ {elem.price}</p>
				</div>
				{elem.paymentmode ? (
					<div className='orderRow'>
						<h4>Payment mode</h4>

						<button className='btn-online' disabled='disabled'>
							{elem.paymentmode}
						</button>
					</div>
				) : (
					<div className='orderRow'>
						<h4>Payment mode</h4>

						<button className='btn-online' disabled='disabled'>
							COD
						</button>
					</div>
				)}
				{page !== "cancelled" && (
					<div>
						{elem.status === "completed" ? (
							<button className='order-complete order-complete-active'>
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
									setIsLoading(true);
									updateStatus(e, "completed");
								}}
								className='order-complete'>
								{loading ? (
									<Bars
										height='20'
										width='100'
										color='orange'
										ariaLabel='loading'
									/>
								) : (
									<>
										<img
											style={{
												height: "20px",
												marginRight: "10px",
											}}
											src='/images/check.svg'
											alt=''
										/>
										Mark Order completed
									</>
								)}
							</button>
						)}
					</div>
				)}

				<div className='orderRow'>
					{page === "cancelled" || page == "History" ? (
						<></>
					) : (
						<button
							onClick={(e) => {
								e.stopPropagation();
								setAcceptLoading(true);
								updateStatus(e, "accepted");
							}}
							className='order_button order_button_accept'
							// disabled='disabled'
						>
							{acceptLoading ? (
								<Bars
									height='20'
									width='100'
									color='orange'
									ariaLabel='loading'
								/>
							) : (
								<>
									{elem.status === "accepted"
										? "Order Accepted"
										: "Accept Order"}
								</>
							)}
						</button>
					)}
					{page == "History" ? (
						<></>
					) : (
						<button
							onClick={(e) => {
								e.stopPropagation();
								setCancelledLoading(true);
								updateStatus(e, "cancelled");
								// handleShow(e);
							}}
							className='order_button order_button_cancel'
							// disabled='disabled'
						>
							{cancelledLoading ? (
								<Bars
									height='20'
									width='100'
									color='orange'
									ariaLabel='loading'
								/>
							) : (
								<>
									{elem.status === "cancelled"
										? "Order Cancelled"
										: "Cancel Order"}
								</>
							)}
						</button>
					)}
				</div>
			</div>
		</>
	);
};

export default Order;
