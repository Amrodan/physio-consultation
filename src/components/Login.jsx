import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './forms.css';
import {
	signInWithEmailAndPassword,
	sendEmailVerification,
	signInWithPopup,
	FacebookAuthProvider,
	GoogleAuthProvider
} from 'firebase/auth';
import { auth } from './firebase';
import { useAuthValue } from '../context/AuthContext';
import { collection, addDoc, getDocs, where, query } from 'firebase/firestore';
import { db } from './firebase';

import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import showPwdImg from '../assets/images/show-password.svg';
import hidePwdImg from '../assets/images/hide-password.svg';
export default function Login2() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ error, setError ] = useState('');
	const { setTimeActive } = useAuthValue();
	const [ isChecked, setIsChecked ] = useState(false);
	const [ isRevealPwd, setIsRevealPwd ] = useState(false);
	const [ isAdmin, setIsAdmin ] = useState(false);
	const [ user, setUser ] = useState(null);

	const { currentUser } = useAuthValue();
	const history = useNavigate();
	const users = currentUser;
	const usersRef = collection(db, 'users');

	// useEffect(
	// 	() => {
	// 		// console.log(list);
	// 		const isadmin = async () => {
	// 			const queri = query(usersRef, where('isAdmin', '==', true));
	// 			const data = await getDocs(queri);
	// 			if (users && data) {
	// 				history('adminPage');
	// 			}
	// 		};

	// 		isadmin();
	// 	},
	// 	[ users, usersRef ]
	// );
	const googleProvider = new GoogleAuthProvider();
	const signInWithGoogle = async () => {
		try {
			const res = await signInWithPopup(auth, googleProvider);
			const user = res.user;
			if (user) {
				history('/profile');
			}
			const q = query(collection(db, 'users'), where('uid', '==', user.uid));
			const docs = await getDocs(q);
			if (docs.docs.length === 0) {
				await addDoc(collection(db, 'users'), {
					uid: user.uid,
					name: user.displayName,
					authProvider: 'google',
					email: user.email
				});
			}
		} catch (err) {
			// console.error(err);
			setError(err.message.split(' ').slice(1).join(' '));
		}
	};
	const facebookProvider = new FacebookAuthProvider();
	const signInWithFb = async () => {
		try {
			const res = await signInWithPopup(auth, facebookProvider);
			const user = res.user;
			if (user) {
				history('/profile');
			}

			const q = query(collection(db, 'users'), where('uid', '==', user.uid));
			const docs = await getDocs(q);
			if (docs.docs.length === 0) {
				await addDoc(collection(db, 'users'), {
					uid: user.uid,
					name: user.displayName,
					authProvider: 'facebook',
					email: user.email
				});
			}
		} catch (err) {
			// console.error(err);
			setError(err.message.split(' ').slice(1).join(' '));
		}
	};
	const handleOnChange = () => {
		setIsChecked(!isChecked);
	};

	const login = async (e) => {
		e.preventDefault();
		const queri = query(usersRef, where('isAdmin', '==', true));
		const data = await getDocs(queri);
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				// currentUser.uid === 'nrQh9Ygk27cxw0BiAxvrFJ1nSa13' && history('adminPage');
				if (!auth.currentUser.emailVerified) {
					sendEmailVerification(auth.currentUser).then(() => {
						setTimeActive(true);
						history('/verify-email');
					});
					// .catch((err) => setError(err.message));
				} else {
					history('/profile');
					console.log(auth);
				}
			})
			.catch((err) => {
				console.log(err);
				// setError(mapAuthCodeToMessage(err.message));
				if (err.message.includes('Firebase: Error (auth/user-not-found)')) {
					setError('The email address is not valid.');
				}
				if (err.message.includes('Firebase: Error (auth/wrong-password)')) {
					setError('The password you entered does not match to this user.');
				} else {
					setError(err.message.split(' ').slice(1).join(' '));
				}
			});
	};

	return (
		<div className="img_log	 relative  w-full h-full bg-zinc-900/90">
			{/* <img className="absolute w-full h-full   mix-blend-overlay" alt="log in" /> */}

			<div className="flex justify-center items-center ">
				<form
					className="max-w-[400px] gap-2 w-full opacity-90 mx-auto bg-gray-900 p-5"
					onSubmit={login}
					name="login_form"
				>
					<h2 className="text-4xl font-bold text-center py-4">Sign In</h2>
					<div className="flex justify-between py-8">
						<p className="border shadow-lg hover:shadow-2xl px-6 py-2 relative flex items-center">
							<button onClick={signInWithFb} className="flex items-center">
								<AiFillFacebook className="mr-2" /> Facebook
							</button>
						</p>
						<p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center">
							<button onClick={signInWithGoogle} className="items-center flex">
								<FcGoogle className="mr-2" /> Google
							</button>
						</p>
					</div>
					<div className="flex flex-col mb-4">
						<label>Username</label>
						<input
							className="border relative bg-gray-100 p-2"
							required
							value={email}
							type="email"
							placeholder="Enter your email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="flex flex-col ">
						<label>Password</label>
						<div className="pwd-container relative ">
							{' '}
							<input
								className="border relative bg-gray-100 p-2"
								type={isRevealPwd ? 'text' : 'password'}
								value={password}
								required
								placeholder="Enter your password"
								onChange={(e) => setPassword(e.target.value)}
							/>
							<img
								className="cursor-pointer absolute top-3 right-3 w-6"
								title={isRevealPwd ? 'Hide password' : 'Show password'}
								src={isRevealPwd ? hidePwdImg : showPwdImg}
								onClick={() => setIsRevealPwd((prevState) => !prevState)}
								alt=" "
							/>
						</div>{' '}
					</div>

					<button
						type="submit"
						className="w-full rounded-md mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white"
					>
						Sign In
					</button>
					<p className="text-red-600">
						<strong>{error}</strong>{' '}
					</p>
					<div>
						<Link to="/reset">Forgot Password</Link>
					</div>
					<p className="flex items-center mt-2 justify-evenly w-40">
						<input
							className="flex w-4"
							type="checkbox"
							id="x"
							name="topping"
							value="Paneer"
							checked={isChecked}
							onChange={handleOnChange}
						/>{' '}
						<label htmlFor="x">Remember Me</label>
					</p>
					<p className="text-center mt-8 ">
						Not a member ? &nbsp; <Link to="/signup"> Sign up</Link>&nbsp;now
					</p>
				</form>
			</div>
		</div>
	);
}
