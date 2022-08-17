import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './forms.css';
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuthValue } from '../Authcontext/AuthContext';

function Login() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ error, setError ] = useState('');
	const { setTimeActive } = useAuthValue();
	const history = useNavigate();

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
		<div className="justify-center flex m-8 ">
			<div className="auth">
				<h1>Log in</h1>
				{error && <div className="auth__error">Wrong email or password</div>}
				<form onSubmit={login} name="login_form">
					<input
						type="email"
						value={email}
						required
						placeholder="Enter your email"
						onChange={(e) => setEmail(e.target.value)}
					/>

					<input
						type="password"
						value={password}
						required
						placeholder="Enter your password"
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button type="submit">Login</button>
				</form>
				<p>
					Don't have and account?
					<Link to="/signup"> Create one here </Link>
				</p>
			</div>
		</div>
	);
}

export default Login;
