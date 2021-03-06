import React, { useState, useEffect } from "react";
import "./Home.scss";
import "./data";
import Navigation from "../../components/navigation/Navigation";

import swal from "sweetalert";
import Order from "../../components/orderCard/Order";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Loader from "../../utils/Loader";
const Home = () => {
	const [orderData, setOrderData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [refresh, setRefresh] = useState(false);

	const cancelOrder = (reason) => {
		console.log("Order cancelled due to ", reason);
		swal({
			icon: "success",
			title: "Order cancelled",
		});
	};
	const handleShow = (e) => {
		e.stopPropagation();

		swal("Reason for cancel", "Choose any one of the following", {
			buttons: {
				unavailable: "Item unavailable",
				other: "other",
				close: true,
			},
		}).then((value) => {
			switch (value) {
				case "unavailable":
					cancelOrder("unavailable");
					break;

				case "other":
					cancelOrder("other");

					break;

				default:
				// swal("Got away safely!");
			}
		});
	};

	const getData = async () => {
		setLoading(true);

		try {
			let data = await axios.get(
				"https://bunker-api-staging.herokuapp.com/orders"
			);
			console.log("data is", data.data.orders);

			console.log(data.data.orders);
			setOrderData(data.data.orders);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
			setOrderData([]);
		}
	};
	useEffect(() => {
		let data = JSON.parse(localStorage.getItem("user"));
		console.log(data);

		getData();
	}, [refresh]);
	return (
		<>
			<Navigation />

			<div className='main'>
				{loading ? (
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							height: "90vh",
						}}>
						<Loader />
					</div>
				) : (
					<>
						<h3 className='main_heading'>Orders</h3>
						{orderData.length > 0 ? (
							<>
								<div className='orders'>
									{orderData?.map((elem) => {
										return (
											<Order
												key={elem._id}
												elem={elem}
												handleShow={handleShow}
												setRefresh={setRefresh}
												refresh={refresh}
											/>
										);
									})}
								</div>
							</>
						) : (
							<div
								style={{
									textAlign: "center",
									color: "white",
									marginTop: "40px",
								}}>
								You don't have any orders yet
							</div>
						)}
					</>
				)}
			</div>

			<ToastContainer />
		</>
	);
};

export default Home;
