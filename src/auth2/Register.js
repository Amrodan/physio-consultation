import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './forms.css';
import { auth } from '../firebase';
import { useAuthValue } from '../Authcontext/AuthContext';

import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

function Register() {
	const { setTimeActive } = useAuthValue();
	console.log(setTimeActive);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const [ error, setError ] = useState('');

	const history = useNavigate();

	const validatePassword = () => {
		let isValid = true;
		if (password !== '' && confirmPassword !== '') {
			if (password !== confirmPassword) {
				isValid = false;
				setError('Passwords does not match');
			}
		}
		return isValid;
	};
	const register = (e) => {
		e.preventDefault();
		setError('');
		if (validatePassword()) {
			// Create a new user with email and password using firebase
			createUserWithEmailAndPassword(auth, email, password).then(() => {
				sendEmailVerification(auth.currentUser)
					.then(() => {
						setTimeActive(true);
						history('/verify-email');
					})
					.catch((err) => alert(err.message));
			});
		}
		setEmail('');
		setPassword('');
		setConfirmPassword('');
	};
	return (
		<div className="center justify-center flex m-8">
			<div className="auth">
				<h1>Register</h1>
				{error && <div className="auth__error">{error}</div>}
				<form onSubmit={register} name="registration_form">
					<input
						type="email"
						value={email}
						placeholder="Enter your email"
						required
						onChange={(e) => setEmail(e.target.value)}
					/>

					<input
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

					<button type="submit">Register</button>
				</form>
				<span>
					Already have an account?
					<Link to="/signin"> login</Link>
				</span>
			</div>
		</div>
	);
}

export default Register;
