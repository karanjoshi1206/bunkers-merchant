import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import Order from "../../components/orderCard/Order";
import Loader from "../../utils/Loader";
import "../Home/Home.scss";
const History = () => {
	const [orderData, setOrderData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [refresh, setRefresh] = useState(false);
	const getData = async () => {
		setLoading(true);

		try {
			let data = await axios.get(
				"https://bunker-api-staging.herokuapp.com/orders"
			);
			let completedData = data.data.orders.filter(
				(order) => order.status === "completed"
			);
			setOrderData(completedData);
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
		<div>
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
						<h3 className='main_heading'>History</h3>

						{orderData.length > 0 ? (
							<>
								<div className='orders'>
									{orderData?.map((elem) => {
										return (
											<Order
												key={elem._id}
												elem={elem}
												setRefresh={setRefresh}
												refresh={refresh}
												page='History'
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
		</div>
	);
};

export default History;
