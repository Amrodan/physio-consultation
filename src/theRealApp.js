import React from 'react';
// import Signup from './auth/Signup';
// import { Container } from 'react-bootstrap';
// import { AuthProvider } from './context/AuthContext';
// import Dashboard from './auth/Dashboard';
// import Login from './auth/Login';
// import PrivateRoute from './auth/PrivateRoute';
// import ForgotPassword from './auth/forgotPassword';
// import UpdateProfile from './auth/UpdateProfile';
import Profile from './auth2/Profile';
import Register from './auth2/Register';
import VerifyEmail from './auth2/VerifyEmail';
import Login from './auth2/Login';

import TestCalendar from './TestCalendar';
import '@coreui/coreui/dist/css/coreui.min.css';
import Nav from './Nav';
import LandingPage from './LandingPage';
import Card from './Card';
import Contact from './Contact';
import Footer from './Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TextWrapper from './TextWrapper';

function About() {
	return (
		<div>
			<main>
				<h2>Who are we?</h2>
				<p>That feels like an existential question, don't you think?</p>
			</main>
			<nav>
				<Link to="/">Home</Link>
			</nav>
		</div>
	);
}
function Home() {
	return (
		<div>
			<main>
				<h2>Welcome to the homepage!</h2>
				<p>You can do this, I believe in you.</p>
			</main>
			<nav>
				<Link to="/about">About</Link>
			</nav>
		</div>
	);
}
function App() {
	return (
		<BrowserRouter>
			<div className="">
				{/* <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
					<div className="w-100" style={{ maxWidth: '400px' }}>
						<AuthProvider>
							<Routes>
								<PrivateRoute exact path="/" component={Dashboard} />
								<PrivateRoute path="/update-profile" component={UpdateProfile} />
								<Route path="/signup" component={Signup} />
								<Route path="/login" component={Login} />
								<Route path="/forgot-password" component={ForgotPassword} />
								<Route path="forgot-password" element={<ForgotPassword />} />
							</Routes>
						</AuthProvider>
					</div>
				</Container> */}
				{/* <Login /> */}
				<Nav />
				<LandingPage />
				<TextWrapper />
				<Card />
				<Routes>
					<Route path="about" element={<About />} />

					<Route path="calendar" element={<TestCalendar />} />
				</Routes>
				<Contact />
				<Register />
				<Profile />
				<Login />
				<VerifyEmail />
				<Footer />
			</div>
		</BrowserRouter>
	);
}
export default App;
