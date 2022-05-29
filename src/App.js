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
import History from "./screens/History/History";
import Cancel from "./screens/Cancelled/Cancel";
function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Navigate replace to='/signup' />} />

					<Route exact path='/signup' element={<SignUp />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/orders' element={<Home />} />
					<Route exact path='/history' element={<History />} />
					<Route exact path='/cancelled-orders' element={<Cancel />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
