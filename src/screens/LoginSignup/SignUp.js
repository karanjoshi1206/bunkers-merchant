import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const SignUp = () => {
	// const navigate = useNavigate();

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
								// required
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
								// required
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
								// required
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
								// required
								autoComplete='false'
								type='password'
								id='password'
								placeholder='Set your password'
							/>
						</div>
					</div>

					<div className='button'>
						<Link to='/home'>
							<input autoComplete='off' type='submit' value='Register' />
						</Link>
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
