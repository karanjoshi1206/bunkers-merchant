import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase";
import swal from "sweetalert";

import Loader from "../../utils/Loader";
import { auth } from "../../firebase";

const SignUp = () => {
	const googleProvider = new firebase.auth.GoogleAuthProvider();

	const navigate = useNavigate();
	// const [fname, setFname] = useState("");
	// const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const signInWithGoogle = async () => {
		auth
			.signInWithPopup(googleProvider)
			.then((res) => {
				console.log(res.user.displayName);
				localStorage.setItem("user", JSON.stringify(res.user.displayName));
				navigate("/orders");
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	const register = (e) => {
		setLoading(true);
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				console.log(auth.user.email);
				localStorage.setItem("user", JSON.stringify(auth.user.email));
				setLoading(false);
				navigate("/orders");
			})
			.catch((e) => {
				setLoading(false);
				swal({
					icon: "error",
					title: `There is an error ${e}`,
				});
			});
	};
	useEffect(() => {
		const loggedInUser = localStorage.getItem("user");

		if (loggedInUser) {
			console.log(loggedInUser);
			navigate("/orders", {
				state: {
					showToast: true,
				},
			});
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
							{/* <div className='input_box'>
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
							</div> */}
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
							<button onClick={(e) => register(e)}>Register</button>
						</div>

						<div className='alreadyUser'>
							<h5>Already a merchant</h5>
							<div className='login-links'>
								<Link to={"/login"}>Login</Link>
								or
								<div
									className='google'
									onClick={() => {
										signInWithGoogle();
									}}>
									<img className='logo' src='./images/google logo.png' alt='' />
									Join with google
								</div>
							</div>
						</div>
					</form>
				</div>
			)}
		</div>
	);
};

export default SignUp;
