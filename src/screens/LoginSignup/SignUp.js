import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

import Loader from "../../utils/Loader";

const SignUp = () => {
	const navigate = useNavigate();
	const [fname, setFname] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const signUp = async (e) => {
		setLoading(true);
		e.preventDefault();
		console.log(typeof phone);
		if (fname === "" || phone === "" || email === "" || password === "") {
			swal({
				icon: "error",
				title: "Insufficient details ",
			});
			setLoading(false);
		} else {
			await axios
				.post("https://bunker-api-food.herokuapp.com/merchant/signup", {
					email: email,
					password: password,
					name: fname,
					phoneNumber: phone,
				})
				.then((res) => {
					console.log(res.data);

					localStorage.setItem("user", JSON.stringify(res.data.result));
					setLoading(false);

					navigate("/orders");
				})
				.catch((err) => {
					setLoading(false);
					console.log(err?.response?.status);
					swal({
						icon: "error",
						title: "Something went wrong!!	",
					});
				});
		}
	};

	useEffect(() => {
		const loggedInUser = localStorage.getItem("user");

		if (loggedInUser?._id) {
			console.log(loggedInUser);
			navigate("/orders");
		}
	}, [navigate]);

	return (
		<div className='signUp_container'>
			{loading ? (
				<Loader />
			) : (
				<div className='Login'>
					<div className='title'>Register</div>
					<form autoComplete='false' action='#'>
						<div className='user-details'>
							<div className='input_box'>
								<label className='details' htmlFor='name'>
									Full Name
								</label>
								<input
									value={fname}
									onChange={(e) => setFname(e.target.value)}
									autoComplete='false'
									type='text'
									id='name'
									placeholder='Eg. Karan Joshi'
								/>{" "}
							</div>
							<div className='input_box'>
								<label className='details' htmlFor='number'>
									Mobile number
								</label>
								<input
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									autoComplete='false'
									type='number'
									id='number'
									placeholder='Eg. 894728392'
								/>
							</div>
							<div className='input_box'>
								<label className='details' htmlFor='email'>
									Email
								</label>
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									autoComplete='false'
									type='email'
									id='email'
									placeholder='Eg. karanjoshi123@gmail.com'
								/>
							</div>
							<div className='input_box'>
								<label className='details' htmlFor='password'>
									Password
								</label>
								<input
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									autoComplete='false'
									type='password'
									id='password'
									placeholder='Set your password'
								/>
							</div>
						</div>

						<div className='button'>
							{/* <input autoComplete='off' type='submit' value='Register' /> */}
							<button onClick={(e) => signUp(e)}>Register</button>
						</div>
						<div className='alreadyUser'>
							<h5>Already a merchant</h5>
							<Link to='/login'>Login here</Link>
						</div>
					</form>
				</div>
			)}
		</div>
	);
};

export default SignUp;
