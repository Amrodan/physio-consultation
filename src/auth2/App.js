import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import Register from './Register';
import VerifyEmail from './VerifyEmail';
import Login from './Login';
import { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthProvider } from '../Authcontext/AuthContext';
import PrivateRoute from './auth2/PrivateRoute';
// import PrivateRoute from './../auth/PrivateRoute';

function App() {
	const [ currentUser, setCurrentUser ] = useState(null);
	const [ timeActive, setTimeActive ] = useState(false);
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			console.log(user);
			setCurrentUser(user);
		});
	}, []);
	return (
		<Router>
			<AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
				<Routes>
					<Route element={<PrivateRoute />}>
						<Route path="/" element={<Profile />} />
					</Route>

					<Route path="/signin" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/verify-email" element={<VerifyEmail />} />
				</Routes>
			</AuthProvider>
		</Router>
	);
}

export default App;
