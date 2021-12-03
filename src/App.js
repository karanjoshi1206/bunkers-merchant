import "./App.css";
import SignUp from "./screens/LoginSignup/SignUp.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/LoginSignup/Login.js";
import Home from "./screens/Home/Home";
import Orderinfo from "./components/orderinfo/Orderinfo";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route exact path='/' element={<SignUp />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/home' element={<Home />} />
					<Route exact path='/orderInfo' element={<Orderinfo />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
