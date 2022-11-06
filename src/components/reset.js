import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firehooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth, sendPasswordReset } from './firebase';
import './reset.css';
function Reset() {
	const [ email, setEmail ] = useState('');
	const [ user, loading, error ] = useAuthState(auth);
	const navigate = useNavigate();
	useEffect(
		() => {
			if (loading) return;
			if (user) navigate('/dashboard');
		},
		[ user, loading ]
	);
	return (
		<div className="reset">
			<div className="reset__container">
				<h1 className="reset_size">Reset Password</h1>
				<input
					type="text"
					className="reset__textBox mt-16"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="E-mail Address"
				/>
				<button className="reset__btn" onClick={() => sendPasswordReset(email)}>
					Send password reset email
				</button>
				<div>
					<span className="text-center mt-8 ">
						Already have an account?
						<Link to="/signin"> login</Link>
					</span>
				</div>
			</div>
		</div>
	);
}
export default Reset;
