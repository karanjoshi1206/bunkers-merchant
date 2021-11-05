import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
	return (
		<div className='container'>
			<div className='Login'>
				<div className='title'>Register</div>
				<form autocomplete='false' action='#'>
					<div className='user-details'>
						<div className='input_box'>
							<label className='details' htmlFor='name'>
								Full Name
							</label>
							<input
								autocomplete='false'
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
								autocomplete='false'
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
								autocomplete='false'
								type='password'
								id='password'
								placeholder='Set your password'
							/>
						</div>
					</div>

					<div className='button' type='submit'>
						<input autocomplete='off' type='submit' value='Register' />
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
