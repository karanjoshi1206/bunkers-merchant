import "./App.css";
import SignUp from "./screens/LoginSignup/SignUp.js";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Login from "./screens/LoginSignup/Login.js";
import Home from "./screens/Home/Home";
import Orderinfo from "./components/orderinfo/Orderinfo";
function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Navigate replace to='/signUp' />} />

					<Route exact path='/signUp' element={<SignUp />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/orders' element={<Home />} />
					<Route exact path='/orderInfo/:id' element={<Orderinfo />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
