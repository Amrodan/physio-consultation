import { useState } from 'react';
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

export default function Login2() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ error, setError ] = useState('');
	const { setTimeActive } = useAuthValue();
	const [ isChecked, setIsChecked ] = useState(false);

	const history = useNavigate();
	// const signInWithFb = () => {
	// 	const provider = new FacebookAuthProvider();
	// 	signInWithPopup(auth, provider)
	// 		.then((res) => {
	// 			console.log(res);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err.message);
	// 		});
	// };
	// const signInWithGoogle = () => {
	// 	const provider = new GoogleAuthProvider();
	// 	signInWithPopup(auth, provider)
	// 		.then((res) => {
	// 			console.log(res);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err.message);
	// 		});
	// };
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
			console.error(err);
			alert(err.message);
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
			console.error(err);
			alert(err.message);
		}
	};
	const handleOnChange = () => {
		setIsChecked(!isChecked);
	};

	const login = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				if (!auth.currentUser.emailVerified) {
					sendEmailVerification(auth.currentUser)
						.then(() => {
							setTimeActive(true);
							history('/verify-email');
						})
						.catch((err) => alert(err.message));
				} else {
					history('/profile');
				}
			})
			.catch((err) => setError(err.message));
	};

	return (
		<div className="img_log	 relative  w-full h-screen bg-zinc-900/90">
			{/* <img className="absolute w-full h-full   mix-blend-overlay" alt="log in" /> */}

			<div className="flex justify-center items-center h-screen">
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
						<input
							className="border relative bg-gray-100 p-2"
							type="password"
							value={password}
							required
							placeholder="Enter your password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button
						type="submit"
						className="w-full rounded-md mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white"
					>
						Sign In
					</button> 
					<div>
						<Link to="/reset">Forgot Password</Link>
					</div>
					<p className="flex items-center mt-2 justify-evenly w-40">
						<i  nput
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
						Not a member? <Link to="/signup"> Sign up </Link>now
					</p>
				</form>
			</div>
		</div>
	);
}
