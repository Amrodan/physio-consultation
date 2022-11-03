import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Profile, Register1, Login2, VerifyEmail, auth, RequireAuth } from './components/index';
import { LandingPage, Card, Contact, Footer, Navbar, ApointmentPage, NotAuthNavbar, Feed } from './section/index';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './components/protectedRoutes';

function App() {
	const [ currentUser, setCurrentUser ] = useState(null);
	const [ timeActive, setTimeActive ] = useState(false);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			console.log(user);
			setCurrentUser(user);
		});
	}, []);
	const ROLES = {
		User: 2001,
		Editor: 1984,
		Admin: 5150
	};

	return (
		<Router>
			<div>
				{currentUser ? <NotAuthNavbar /> : <Navbar />}

				<AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
					<Routes>
						<Route path={'/'} element={<LandingPage />} />
						<Route element={<RequireAuth />}>
							<Route path="about" element={<Card />} />
							<Route path="profile" element={<Profile />} />
							<Route path={'/newsFeed'} element={<Feed />} />
						</Route>

						<Route path={'/contact'} element={<Contact />} />

						<Route element={<RequireAuth allowedRoles={[ ROLES.User ]} />}>
							<Route path="calendar" element={<ApointmentPage />} />
						</Route>
						<Route path="/signin" element={<Login2 />} />
						<Route path="/signup" element={<Register1 />} />
						<Route path="/verify-email" element={<VerifyEmail />} />
						<Route
							path="*"
							element={
								<p
									style={{
										height: '100vh',
										alignItems: 'center',
										display: 'flex',
										justifyContent: 'center'
									}}
								>
									There's nothing here: 404! go to<pre> </pre> <Link to="/"> Home page</Link>
								</p>
							}
						/>
					</Routes>
				</AuthProvider>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
