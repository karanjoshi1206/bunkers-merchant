import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className='container'>
			<div className='Login'>
				<div className='title'>Login</div>
				<form autocomplete='false' action='#'>
					<div className='user-details'>
						<div className='input_box'>
							<label className='details' htmlFor='email'>
								Email
							</label>
							<input
								required
								autocomplete='false'
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
								required
								autocomplete='false'
								type='password'
								id='password'
								placeholder='Set your password'
							/>
						</div>
					</div>

					<div className='button' type='submit'>
						<input required autocomplete='off' type='submit' value='Login' />
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
