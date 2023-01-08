import React from 'react';
import '../styles/footer.css';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer>
			<p href="#" className=" logo_footer">
				wernicke
			</p>
			<ul className="permalinks">
				<li>
					<a href="/#">home</a>
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
				<a href="https://linkedin.com/in/alaa-kanj-4a4426199" rel="noreferrer" target="_blank">
					<BsLinkedin />
				</a>
				<a
					href="https://api.whatsapp.com/send?phone=96176399205"
					rel="noreferrer"
					target="_blank"
					className="btn_social"
				>
					<BsWhatsapp />
				</a>
			</div>
			<div className="footer__copyright">
				<small>&copy; Ala'a Kanj : all rights reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
