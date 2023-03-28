// import React, { useContext } from 'react';

// const AuthContext = React.createContext();
// export function AuthProvider({ children, value }) {
// 	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export function useAuthValue() {
// 	return useContext(AuthContext);
// }

import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, sendPasswordReset } from '../components/firebase';

// Create a new context for the authentication state
const AuthContext = createContext();

// Create a provider component that will provide the auth state to its children
export const AuthProvider = ({ children }) => {
	// Use React's useState hook to keep track of the current user state
	const [ currentUser, setCurrentUser ] = useState(null);

	// Set up an observer that will update the current user state whenever the authentication state changes
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	// an object that contains the auth state and any functions that modify it
	const value = {
		currentUser,
		sendPasswordReset
	};

	// Render the provider with the auth state value and its children
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

//   access the auth state
export const useAuthValue = () => useContext(AuthContext);
