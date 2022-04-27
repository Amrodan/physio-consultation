import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
	return (
		<footer>
			<p href="#" className=" logo_footer">
				wernicke
			</p>
			<ul className="permalinks">
				<li>
					<a href="#">home</a>
				</li>
				<li>
					<a href="#about">about</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#testimonials">Testimonials</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div className="footer__socials">
				<a href="https://linkedin.com/in/amro-dandashli" rel="noreferrer" target="_blank">
					<BsLinkedin />
				</a>
				<a href="https://www.linkedin.com/in/alaa-kanj-4a4426199/" rel="noreferrer" target="_blank">
					<IoLogoTwitter />
				</a>
			</div>
			<div className="footer__copyright">
				<small>&copy; Ala'a Kanj : all rights reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
