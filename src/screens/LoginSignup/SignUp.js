import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const SignUp = () => {
	useEffect(() => {
		const loggedInUser = localStorage.getItem("userid");
		if (loggedInUser) {
			console.log(loggedInUser);
		}
	}, []);
	const [fname, setFname] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const signUp = async (e) => {
		e.preventDefault();
		console.log(typeof phone);
		if (fname === "" || phone === "" || email === "" || password === "") {
			swal("Insufficient details ");
		} else {
			await axios
				.post("https://bunker-api-food.herokuapp.com/merchant/signup", {
					email: email,
					password: password,
					name: fname,
					phoneNumber: phone,
				})
				.then((res) => {
					console.log(res.data.result);

					localStorage.setItem("userid", res.data.result.id);
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<div className='signUp_container'>
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
		</div>
	);
};

export default SignUp;
