import React, { useState } from "react";
import "./Home.scss";
import "./data";
import data from "./data.js";
import Navigation from "../../components/navigation/Navigation";

import swal from "sweetalert";
import Order from "../../components/orderCard/Order";

const Home = () => {
	const [orderData] = useState(data);

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

	const update = (e) => {
		e.stopPropagation();
		swal({
			icon: "success",
			title: "Order completed!!",
		});
	};
	return (
		<>
			<Navigation />

			<div className='main'>
				<h3 className='main_heading'>Orders</h3>
				<div className='orders'>
					{orderData?.map((elem) => {
						return (
							<Order
								key={elem.id}
								elem={elem}
								handleShow={handleShow}
								update={update}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Home;
