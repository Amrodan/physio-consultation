import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
// import logo41 from '../assets/images/logo41.png';
const Navbar = () => {
	const [ open, setOpen ] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar">
			<Link to="/" className="nav-logo items-end inline-flex">
				{/* <img src={logo41} alt="Dr Logo" className="nav-logo h-20" /> */}
				<h2>Omega PT.</h2>
			</Link>

			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about" className="nav-link" onClick={closeMenu}>
						About
					</Link>
				</li>

				<li className="nav-item">
					<Link to="/contact" className="nav-link" onClick={closeMenu}>
						Contact
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/calendar" className="nav-link" onClick={closeMenu}>
						Book Now
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/signin" className="nav-link" onClick={closeMenu}>
						Login
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
