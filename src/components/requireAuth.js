import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuthValue } from '../context/AuthContext';

const RequireAuth = ({ allowedRoles }) => {
	const { currentUser } = useAuthValue();
	const location = useLocation();

	let adminEmail = 'amrdandashli@gmail.com';
	let isAdmin = currentUser && currentUser.email === adminEmail;
	let isEmailVerified = currentUser && currentUser.emailVerified;

	if (isAdmin) {
		if (
			location.pathname === '/adminPage' ||
			location.pathname === '/newsFeed' ||
			location.pathname.startsWith('/posts/')
		) {
			return <Outlet />;
		} else {
			return <Navigate to="/adminPage" state={{ from: location }} replace />;
		}
	} else if (isEmailVerified) {
		if (location.pathname !== '/adminPage') {
			return <Outlet />;
		} else {
			return <Navigate to="/" state={{ from: location }} replace />;
		}
	} else {
		if (location.pathname !== '/signin') {
			return <Navigate to="/signin" state={{ from: location }} replace />;
		} else {
			return <Outlet />;
		}
	}
};

export default RequireAuth;

// import { useLocation, Navigate, Outlet } from 'react-router-dom';
// import { useAuthValue } from '../context/AuthContext';

// const RequireAuth = ({ allowedRoles }) => {
// 	const { currentUser } = useAuthValue();
// 	const location = useLocation();

// 	let adminEmail = 'amrdandashli@gmail.com';
// 	let isAdmin = currentUser && currentUser.email === adminEmail;
// 	let isEmailVerified = currentUser && currentUser.emailVerified;

// 	if (isAdmin) {
// 		if (location.pathname !== '/adminPage') {
// 			return (
// 				<Navigate to="/adminPage" state={{ from: location }} replace /> || (
// 					<Navigate to="/newsFeed" state={{ from: location }} replace />
// 				)
// 			);
// 		} else {
// 			return <Outlet />;
// 		}
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

// const RequireAuth = ({ isAdmin, isEmailVerified }) => {
// 	const location = useLocation();

// 	if (isAdmin) {
// 		if (location.pathname !== '/adminPage') {
// 			return <Navigate to="/adminPage" replace />;
// 		} else {
// 			return <Outlet />;
// 		}
// 	} else if (isEmailVerified) {
// 		return <Outlet />;
// 	} else {
// 		return <Navigate to="/signin" replace />;
// 	}
// };

// export default RequireAuth;
