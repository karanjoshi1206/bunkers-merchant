import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();

		localStorage.setItem("user", {
			email: `${email}`,
			password: password,
		});
	};
	return (
		<div className='signUp_container'>
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
						<button onClick={(e) => handleSubmit(e)}>Submit</button>
					</div>
					<div className='alreadyUser'>
						<h5>Not a merchant</h5>
						<Link to='/'>SignUp here</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
