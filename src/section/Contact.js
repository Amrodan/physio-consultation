import React, { useRef } from 'react';
import '../styles/contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const forme = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_wexhqrx', 'template_e2vai2v', forme.current, 'Ygmi_9ZLgUIzjJZRr');
		e.target.reset();
	};
	return (
		<section className="contact  ">
			<div className="align-center text-center m-8">
				<h5>Get In Touch</h5>
				<h2>Contact ME</h2>
			</div>
			<div id="message" className="container_contact__contaienr mt-24 ">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>alaaelkanj1020@gmail.com</h5>
						<a
							href="mailto:alaaelkanj1020@gmail.com"
							rel="noreferrer"
							target="_blank"
							className="btn_social"
						>
							Send a Message
						</a>
					</article>

					<article id="message" className="contact__option">
						<BsWhatsapp className="contact__option-icon" />
						<h4>WhatsApp</h4>
						<h5>+96176399205</h5>
						<a
							href="https://api.whatsapp.com/send?phone=96176399205"
							rel="noreferrer"
							target="_blank"
							className="btn_social"
						>
							Send a Message
						</a>
					</article>
				</div>
				<form ref={forme} onSubmit={sendEmail} className="form_contact">
					<input type="text" name="name" placeholder="Your full Name" required />
					<input type="email" name="email" placeholder="Your email" required />
					<textarea name="message" placeholder="Your message" rows="5" required />
					<button type="submit" className="  btn-primary">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
