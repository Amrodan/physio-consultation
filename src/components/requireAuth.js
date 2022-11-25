import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuthValue } from '../context/AuthContext';

const RequireAuth = ({ allowedRoles }) => {
	const { currentUser } = useAuthValue();
	const location = useLocation();

	return currentUser?.emailVerified  ? (
		<Outlet />
	) : (
		//! : currentUser?.user
		//     ? <Navigate to="/contact" state={{ from: location }} replace />
		<Navigate to="/signin" state={{ from: location }} replace />
	);
};

export default RequireAuth;
