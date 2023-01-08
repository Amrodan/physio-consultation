import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import Omega from '../assets/images/Omega.png';

import { useTranslation, Trans } from 'react-i18next';

const lngs = {
	en: { nativeName: 'English' },

	ar: { nativeName: 'عربي' }
};

const Navbar = () => {
	const { t, i18n } = useTranslation();
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
				<img src={Omega} alt="Dr Logo" className="nav-logo h-20" />
				{/* <h2>Omega PT.</h2> */}
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

				<li className="nav-item cursor-pointer">
					{/* <Link to="/contact" className="nav-link" onClick={closeMenu}>
						Contact
					</Link> */}

					{Object.keys(lngs).map((lng) => (
						<span
							className="nav-link"
							key={lng}
							style={{
								display: i18n.resolvedLanguage === lng ? 'none' : ''
								// color: i18n.resolvedLanguage === lng ? 'blue' : 'normal'
							}}
							type="submit"
							onClick={() => i18n.changeLanguage(lng)}
						>
							{lngs[lng].nativeName}
						</span>
					))}
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

			{/* <p>
				<Trans i18nKey="description.part1">Edit src/App.js and save to reload.</Trans>
			</p>يمكن أن يكون العلاج الطبيعي عبر الإنترنت طريقة ملائمة وفعالة لإدارة الإصابات وتوجيه شفائك.
			<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
				{t('description.part2')}
			</a> */}
		</nav>
	);
};

export default Navbar;
