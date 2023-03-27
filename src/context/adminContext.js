// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { useAuthValue } from './AuthContext';

// export const AdminContext = createContext();

// const AdminProvider = ({ children }) => {
// 	const { currentUser } = useAuthValue();
// 	const [ isAdmin, setIsAdmin ] = useState(false);
// 	const [ isEmailVerified, setIsEmailVerified ] = useState(false);

// 	useEffect(
// 		() => {
// 			let adminEmail = 'amrdandashli@gmail.com';
// 			setIsAdmin(currentUser && currentUser.email === adminEmail);
// 			setIsEmailVerified(currentUser && currentUser.emailVerified);
// 		},
// 		[ currentUser ]
// 	);

// 	return <AdminContext.Provider value={{ isAdmin, isEmailVerified }}>{children}</AdminContext.Provider>;
// };

// export default AdminProvider;
// import { useLocation, Navigate, Outlet } from 'react-router-dom';
// import { useAuthValue } from '../context/AuthContext';

// const RequireAuth = ({ allowedRoles }) => {
// 	const { currentUser } = useAuthValue();
// 	const location = useLocation();

// 	let adminEmail = 'amrdandashli@gmail.com';
// 	let isAdmin = currentUser && currentUser.email === adminEmail;
// 	let isEmailVerified = currentUser && currentUser.emailVerified;

// 	if (isAdmin) {
// 		return <Outlet />;
// 	} else if (isEmailVerified) {
// 		if (location.pathname !== '/adminPage') {
// 			return <Outlet />;
// 		} else {
// 			return <Navigate to="/" state={{ from: location }} replace />;
// 		}
// 	} else {
// 		if (location.pathname !== '/signin') {
// 			return <Navigate to="/signin" state={{ from: location }} replace />;
// 		} else {
// 			return <Outlet />;
// 		}
// 	}
// };

// export default RequireAuth;
// import { useLocation, Navigate, Outlet } from 'react-router-dom';
// import { useAuthValue } from '../context/AuthContext';
// import { useContext } from 'react';
// import { AdminContext } from '../context/adminContext';
// const RequireAuth = ({ allowedRoles }) => {
// 	const { currentUser } = useAuthValue();
// 	const location = useLocation();
// 	const { isAdmin } = useContext(AdminContext);

// 	let isEmailVerified = currentUser && currentUser.emailVerified;

// 	if (isAdmin) {
// 		if (location.pathname !== '/adminPage') {
// 			return <Navigate to="/adminPage" state={{ from: location }} replace />;
// 		} else {
// 			return <Outlet />;
// 		}
// 	} else if (isEmailVerified) {
// 		return <Outlet />;
// 	} else {
// 		return <Navigate to="/signin" state={{ from: location }} replace />;
// 	}
// };

// export default RequireAuth;
