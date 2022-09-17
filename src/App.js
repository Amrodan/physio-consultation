import './auth2/App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Profile from './auth2/Profile';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Card from './Card';
import Contact from './Contact';
import Footer from './Footer';
import Home from './components/Home';
import ChatPage from './components/ChatPage';
import socketIO from 'socket.io-client';

import Register1 from './auth2/Register1';
import VerifyEmail from './auth2/VerifyEmail';
import Login from './auth2/Login';
import { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import ApointmentPage from './Apointment/ApointmentPage';
import { AuthProvider } from './Authcontext/AuthContext';
import Test3 from './Test3';
import Login2 from './auth2/Login2';

const socket = socketIO.connect('http://localhost:4000');

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

	return (
		<Router>
			{' '}
			<div>
				{/* <Login1 /> */}
				{/* <Login2 /> */}
				{/* <Login3 /> */}
				{/* <Na /> */}
				<Navbar />
				{/* <Test3 /> */}
				{/* <ApointmentPage /> */}

				<AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
					<Routes>
						<Route path={'/'} element={<LandingPage />} />
						{/* <Route path="/" element={<Home socket={socket} />} /> */}
						{/* <Route path="/chat" element={<ChatPage socket={socket} />} /> */}

						<Route path={'/about'} element={<Card />} />
						<Route path={'/contact'} element={<Contact />} />
						<Route path="calendar" element={<ApointmentPage />} />
						<Route element={<Outlet path="/profile" />}>
							<Route path="/profile" element={<Profile />} />
						</Route>

						<Route path="/signin" element={<Login2 />} />
						<Route path="/signup" element={<Register1 />} />
						<Route path="/verify-email" element={<VerifyEmail />} />
					</Routes>
				</AuthProvider>
				{/* <Footer /> */}
			</div>
		</Router>
	);
}

export default App;
