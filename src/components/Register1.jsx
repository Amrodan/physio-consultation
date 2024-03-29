import { useState } from 'react';

import {
	createUserWithEmailAndPassword,
	sendEmailVerification,
	signInWithPopup,
	FacebookAuthProvider,
	updateProfile,
	GoogleAuthProvider
} from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

// import { auth } from './firebase';
import { db } from './firebase';

import { Link, useNavigate } from 'react-router-dom';
import './forms.css';
import { auth } from '../components/firebase';
import { useAuthValue } from '../context/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';

export default function Register1() {
	const { setTimeActive } = useAuthValue();
	// console.log(setTimeActive);
	const [ email, setEmail ] = useState('');
	const [ displayName, setDisplayName ] = useState('');

	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const [ error, setError ] = useState('');

	const history = useNavigate();

	const signInWithFb = () => {
		const provider = new FacebookAuthProvider();
		signInWithPopup(auth, provider)
			.then((res) => {
				history('/profile');
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((res) => {
				history('/profile');
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
	// const validatePassword = () => {
	// 	let isValid = true;
	// 	if (password !== '' && confirmPassword !== '') {
	// 		if (password !== confirmPassword) {
	// 			isValid = false;
	// 			setError('Passwords does not match');
	// 		}
	// 	}
	// 	return isValid;
	// };

	// const registerWithEmailAndPassword = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		if (validatePassword()) {
	// 			const res = await createUserWithEmailAndPassword(auth, email, password);
	// 			sendEmailVerification(auth.currentUser).then(() => {
	// 				setTimeActive(true);
	// 				history('/verify-email');
	// 			});

	// 			updateProfile(auth.currentUser, { displayName });

	// 			const user = res.user;
	// 			await addDoc(collection(db, 'users'), {
	// 				uid: user.uid,
	// 				isAdmin: false,
	// 				authProvider: 'local',
	// 				email,
	// 				displayName
	// 			});
	// 		}
	// 	} catch (err) {
	// 		// console.error(err);
	// 		setError(err.message.split(' ').slice(1).join(' '));
	// 	}
	// };
	const registerWithEmailAndPassword = async (e) => {
		e.preventDefault();
		setError('');
		if (password !== confirmPassword) {
			setError('Passwords do not match');
			return;
		}
		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);
			sendEmailVerification(auth.currentUser).then(() => {
				setTimeActive(true);
				history('/verify-email');
			});

			updateProfile(auth.currentUser, { displayName });

			const user = res.user;
			await addDoc(collection(db, 'users'), {
				uid: user.uid,
				isAdmin: false,
				authProvider: 'local',
				email,
				displayName
			});
		} catch (err) {
			setError(err.message.split(' ').slice(1).join(' '));
		}
	};
	return (
		<div className="img_log	 relative w-full h-full bg-zinc-900/90">
			{/* <img className="absolute w-full h-full   mix-blend-overlay" alt="log in" /> */}

			<div className="flex justify-center items-center h-4/5 ">
				{/* {error && <div className="auth__error">{error}</div>} */}

				<form
					className="max-w-[400px] gap-2 w-full opacity-90 mx-auto bg-gray-900 p-5"
					onSubmit={registerWithEmailAndPassword}
					name="registration_form"
				>
					<h2 className="text-4xl font-bold text-center py-4">signup</h2>
					<div className="flex justify-between py-6">
						<p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center">
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
						<label>Name</label>
						<input
							className="border relative bg-gray-100 p-2"
							type="name"
							value={displayName}
							placeholder="Enter your Name"
							required
							onChange={(e) => setDisplayName(e.target.value)}
						/>
					</div>{' '}
					<div className="flex flex-col mb-4">
						<label>Email</label>
						<input
							className="border relative bg-gray-100 p-2"
							type="email"
							value={email}
							placeholder="Enter your email"
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>{' '}
					<div className="flex flex-col ">
						<label>Password</label>
						<input
							className="border relative bg-gray-100 p-2 my-1"
							type="password"
							value={password}
							required
							placeholder="Enter your password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<input
							className="border relative bg-gray-100 p-2"
							type="password"
							value={confirmPassword}
							required
							placeholder="Confirm password"
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
					<button
						type="submit"
						className="w-full  rounded-md mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white"
					>
						Sign Up
					</button>
					<p className="text-red-600">
						<strong>{error}</strong>{' '}
					</p>
					<span className="text-center mt-2 ">
						Already have an account?
						<Link to="/signin"> login</Link>
					</span>
				</form>
			</div>
		</div>
	);
}
