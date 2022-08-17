import './auth2/App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Profile from './auth2/Profile';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Card from './Card';
import Contact from './Contact';
import Footer from './Footer';
// import TestCalendar from './TestCalendar';
// import styled from 'styled-components';

import Register from './auth2/Register';
import VerifyEmail from './auth2/VerifyEmail';
import Login from './auth2/Login';
import { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import ApointmentPage from './Apointment/ApointmentPage';
import { AuthProvider } from './Authcontext/AuthContext';
import Test3 from './Test3';
function App() {
	const [ currentUser, setCurrentUser ] = useState(null);
	const [ timeActive, setTimeActive ] = useState(false);
	const [ curr, setCurr ] = useState('');

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			console.log(user);
			setCurrentUser(user);
		});
	}, []);
	// const getDate = () => {
	// 	const a = firebase.firestore.Timestamp.now().toDate().toString();
	// 	setCurr(a);
	// };
	return (
		<Router>
			{' '}
			<div>
				{/* <Na /> */}
				<Navbar />
				{/* <Test3 /> */}
				{/* <ApointmentPage /> */}

				<AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
					<Routes>
						{/* <Route path={'/'} element={<LandingPage />} /> */}
						{/* <Route path={'/chat'} element={<Firestor />} /> */}

						{/* <Route path={''} element={<TextWrapper />} /> */}
						<Route path={'/about'} element={<Card />} />
						<Route path={'/contact'} element={<Contact />} />
						<Route path="calendar" element={<ApointmentPage />} />
						<Route element={<Outlet path="/profile" />}>
							<Route path="/profile" element={<Profile />} />
						</Route>

						<Route path="/signin" element={<Login />} />
						<Route path="/signup" element={<Register />} />
						<Route path="/verify-email" element={<VerifyEmail />} />
					</Routes>
				</AuthProvider>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
