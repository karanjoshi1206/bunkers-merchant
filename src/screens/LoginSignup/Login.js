import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../utils/Loader";
import swal from "sweetalert";
import { auth } from "../../firebase";
import firebase from "firebase";

const Login = () => {
	const googleProvider = new firebase.auth.GoogleAuthProvider();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const signInWithGoogle = () => {
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
	const login = (e) => {
		setLoading(true);

		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				console.log("auth is ", auth);
				navigate("/orders", {
					state: {
						showToast: true,
					},
				});
				setLoading(false);
			})
			.catch((e) => {
				setLoading(false);
				swal({
					icon: "error",
					title: `There is an error ${e}`,
				});
			});
	};
	return (
		<div className='signUp_container'>
			{loading ? (
				<Loader />
			) : (
				<div className='Login'>
					<div className='title'>Login</div>
					<form autoComplete='false' action='#'>
						<div className='user-details'>
							<div className='input_box'>
								<label className='details' htmlFor='email'>
									Email
								</label>
								<input
									value={email}
									required
									autoComplete='false'
									type='email'
									id='email'
									placeholder='Eg. karanjoshi123@gmail.com'
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className='input_box'>
								<label className='details' htmlFor='password'>
									Password
								</label>
								<input
									value={password}
									required
									autoComplete='false'
									type='password'
									id='password'
									placeholder='Enter your password'
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
						</div>
						{/* <div className='alreadyUser'>
						<Link to='/'>Forgot password</Link>
					</div> */}
						<div className='button' type='submit'>
							{/* <input
							onClick={(e) => handleSubmit(e)}
							required
							autoComplete='off'
							type='submit'
							value='Login'
						/> */}
							<button onClick={(e) => login(e)}>Submit</button>
						</div>
						<div
							style={{
								textAlign: "center",
							}}
							className='text'>
							or
						</div>
						<div className='alreadyUser'>
							<div className='login-links'>
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
						<br />
						<br />

						<div className='alreadyUser'>
							<h5>Not a merchant</h5>
							<Link to='/'>Sign Up here</Link>
						</div>
					</form>
				</div>
			)}
		</div>
	);
};

export default Login;
