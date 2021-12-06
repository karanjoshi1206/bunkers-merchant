import React, { useState } from "react";
import "./Home.css";
import "./data";
import data from "./data.js";
import Navigation from "../../components/navigation/Navigation";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import swal from "sweetalert";

const Home = () => {
	const [orderData] = useState(data);
	const [show, setShow] = useState(false);

	const handleClose = (e) => {
		e.stopPropagation();
		setShow(false);
	};
	const handleShow = (e) => {
		e.stopPropagation();

		setShow(true);
	};
	// useEffect(() => {
	// 	setOrderData(data);
	// 	return () => {
	// 		console.log("hello");
	// 	};
	// }, []);
	let navigate = useNavigate();

	const update = (e) => {
		e.stopPropagation();
		swal("Success!!");
	};
	return (
		<>
			<Navigation />
			<div className='main'>
				<h3 className='main_heading'>Orders</h3>
				<div className='orders'>
					<Modal backdrop='static' show={show} onHide={(e) => handleClose(e)}>
						<Modal.Header closeButton>
							<Modal.Title>Reason for cancel</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							Click on the appropriate reason for cancelling the order
						</Modal.Body>
						<Modal.Footer>
							<Button
								variant='danger'
								onClick={(e) => {
									swal({
										title: "Order cancelled",
										icon: "warning",
										dangerMode: true,
									});
									handleClose(e);
								}}>
								Item unavailable
							</Button>
							<Button
								variant='danger'
								onClick={(e) => {
									swal({
										title: "Order cancelled",
										icon: "warning",
										dangerMode: true,
									});
									handleClose(e);
								}}>
								Other
							</Button>
							<Button onClick={(e) => handleClose(e)} variant='primary'>
								Cancel
							</Button>
						</Modal.Footer>
					</Modal>
					{orderData?.map((elem) => {
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
									<p>{elem.itemName} </p>
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
									<button onClick={(e) => update(e)} className='order-complete'>
										<i className='far fa-check-circle'></i>
										Mark Order completed
									</button>
								</div>

								<div className='orderRow'>
									<button
										onClick={(e) => {
											e.stopPropagation();
											swal("Order accepted");
										}}
										className='btn btn-success'
										// disabled='disabled'
									>
										Accept order
									</button>
									<button
										onClick={(e) => {
											handleShow(e);
										}}
										className='btn btn-danger'
										// disabled='disabled'
									>
										Cancel order
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
