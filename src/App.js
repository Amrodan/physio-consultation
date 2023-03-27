import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Profile, Register1, Login, VerifyEmail, auth, RequireAuth, Post, Reset } from './components/index';
import { LandingPage, Contact, Footer, Navbar, ApointmentPage, NotAuthNavbar, Feed } from './section/index';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthProvider } from './context/AuthContext';
import TableContent from './section/Apointment/table';

const Card = lazy(() => import('./section/Card'));

function App() {
	const [ currentUser, setCurrentUser ] = useState(null);
	const [ timeActive, setTimeActive ] = useState(false);

	const initialList = [
		{
			id: 'a',
			post: '',
			userId: '3frybt7i',
			currentUser: currentUser
		}
		// {
		// 	id: 'b',
		// 	post: '',
		// 	userId: '3frybt7i',
		// 	currentUser: { currentUser }
		// }
	];
	const [ list, setList ] = useState([ initialList ]);

	const isAdmin = currentUser && currentUser.isAdmin;
	const isEmailVerified = currentUser && currentUser.emailVerified;
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			// console.log(user);
			setCurrentUser(user);
		});
	}, []);

	return (
		<Router>
			<div>
				{currentUser ? <NotAuthNavbar /> : <Navbar />}

				<AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
					<Suspense fallback={<div>Loading...</div>}>
						<Routes>
							<Route path="about" element={<Card />} />
							<Route path={'/'} element={<LandingPage />} />
							<Route element={<RequireAuth isAdmin={isAdmin} isEmailVerified={isEmailVerified} />}>
								{' '}
								<Route
									path="profile"
									element={<Profile isAdmin={isAdmin} isEmailVerified={isEmailVerified} />}
								/>
								<Route path={'/newsFeed'} element={<Feed list={list} setList={setList} />} />
								<Route path="posts/:id" element={<Post list={list} setList={setList} />} />
							</Route>

							<Route path={'/contact'} element={<Contact />} />
							<Route element={<RequireAuth isAdmin={isAdmin} isEmailVerified={isEmailVerified} />}>
								<Route path="calendar" element={<ApointmentPage />} />
								<Route path="/adminPage" element={<TableContent />} />
							</Route>
							<Route path="/signin" element={<Login />} />
							<Route path="/reset" element={<Reset />} />
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
										There's nothing here: 404! go to &nbsp;<Link to="/"> Home page</Link>
									</p>
								}
							/>
						</Routes>
					</Suspense>
				</AuthProvider>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
