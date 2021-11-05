import "./App.css";
import SignUp from "./screens/SignUp.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login.js";
function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<SignUp />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
