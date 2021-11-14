import "./App.css";
import SignUp from "./screens/LoginSignup/SignUp.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/LoginSignup/Login.js";
import Home from "./screens/Home/Home";
function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<SignUp />} />
					<Route path='/login' element={<Login />} />
					<Route path='/home' element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
