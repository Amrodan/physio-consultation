import {
	CNavbarNav,
	CNavbar,
	CContainer,
	CNavbarBrand,
	CNavItem,
	CCollapse,
	CNavLink,
	CNavbarToggler
} from '@coreui/react';
import React, { useState } from 'react';
// import Logo from './assets/images/Logo.jpg';
import './nav.css';

export default function Nav() {
	const [ visible, setVisible ] = useState(false);

	return (
		<div>
			<CNavbar expand="lg" colorScheme="light" className="bg-cadetBlue">
				<CContainer fluid className="nav__container">
					<CNavbarBrand href="#" className="logo ">
						Wernicke
						{/* <img src={Logo} alt="logo" width="50px" height="50px" /> */}
					</CNavbarBrand>
					<CNavbarToggler
						aria-label="Toggle navigation"
						aria-expanded={visible}
						onClick={() => setVisible(!visible)}
					/>
					<CCollapse className="navbar-collapse flex  flex-row-reverse" visible={visible}>
						<CNavbarNav className="  ">
							<CNavItem>
								<CNavLink className="w-20" href="#">
									Features
								</CNavLink>
							</CNavItem>
							<CNavItem>
								<CNavLink className="w-auto" href="#booking">
									BOOk A SESSION
								</CNavLink>
							</CNavItem>
							<CNavItem>
								<CNavLink href="#card" active className="w-auto">
									About me
								</CNavLink>
							</CNavItem>
							<CNavItem>
								<CNavLink href="#" disabled>
									{'  '}
								</CNavLink>
							</CNavItem>
							<CNavLink href="#">Logout</CNavLink>
						</CNavbarNav>
					</CCollapse>
				</CContainer>
			</CNavbar>
		</div>
	);
}
