import React from 'react';
import run from '../assets/images/run.jpg';
import { CButton } from '@coreui/react';
import '../styles/landing.css';
import { Link } from 'react-router-dom';
function LandingPage() {
	return (
		<div className="    ">
			<div className=" item 	 ">
				<div className="item__img ">
					<picture>
						<img src={run} alt="logo" />
					</picture>
					<span className="btn_span top-auto bottom-1  left-1/2 align-text-top absolute  ">
						<button className="bg-gray-800	 hover:bg-sky-900	 text-white font-bold py-2 px-4 rounded">
							<Link to="/newsFeed">Join Our Discussion Group</Link>
						</button>
					</span>
					<div className="nav_open text-wrap text-3xl   w-2/5 absolute font-semibold text-white top-32 left-20  ">
						<p>
							Online physiotherapy can be a convenient and effective way to manage injuries and guide your
							recovery.
						</p>
					</div>
					<div className=" text-wrapper   w-2/5 absolute  font-semibold  bottom-[-15%] left-20 ">
						<p>
							"Let's not wait for perfect conditions to begin. Let's begin to make perfection conditions
							for a healthy physical condition"
						</p>{' '}
						<small className="text-xs small">Joerg Teichmann</small>
					</div>
				</div>
			</div>
			<TextWrapper />
		</div>
	);
}

function TextWrapper() {
	return (
		<div>
			<section className="textContainer justify-center flex">
				<article className="text_container text-center w-11/12 mt-16   ">
					<h1 className="before:text-yellow-400  before:content-['Ph']">ysiotherapy Consultation</h1>
					<div className="flex justify-center mt-10">
						<div className="line line_wrap w-36 max-w-1/10 h-0.5 bg-yellow-400       " />
					</div>
					<p className="text-white text-center mt-10">
						Vernicke is a platform that connects physiotherapists with patients. The platform is a tool that
						helps patients to find the best physiotherapist for them and also helps them to find the best
						physiotherapist for them.
					</p>
				</article>
			</section>
			<section className="utube flex justify-center relative p-12">
				<iframe
					className="m-8"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/JaH5acKORUs"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
				<detail className="absolute">
					<summary>
						Visit my{' '}
						<a
							href="https://www.youtube.com/channel/UCIvlK9PeLuPdg-PMC1Ln-fA/featured"
							target="_blank"
							rel="noreferrer"
						>
							Channel on youtube
						</a>
					</summary>
				</detail>
			</section>
		</div>
	);
}

export default LandingPage;
