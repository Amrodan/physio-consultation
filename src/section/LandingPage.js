import React from 'react';
import run from '../assets/images/run.jpg';
import '../styles/landing.css';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
function LandingPage() {
	const { t, i18n } = useTranslation();

	return (
		<div className="    ">
			<div className=" item 	 ">
				<div className="item__img ">
					<picture>
						<img src={run} alt="logo" />
					</picture>
					<span className="btn_span top-auto bottom-1  left-1/3 align-text-top absolute  ">
						<button className="bg-gray-800	 hover:bg-sky-900	 text-white font-bold   rounded">
							<Link to="/newsFeed">
								<Trans i18nKey="description.part6">Join Our Discussion Group</Trans>
							</Link>
						</button>
					</span>
					{/* <p>
						<Trans i18nKey="description.part3">
							Online physiotherapy can be a convenient and effective way to manage injuries and guide your
							recovery.
						</Trans>
					</p> */}
					{/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						{t('description.part3')}
					</a> */}

					<div className="nav_open text-wrap text-3xl   w-2/5 absolute font-semibold text-white top-32 left-20  ">
						<p>
							{' '}
							<Trans i18nKey="description.part3">
								Online physiotherapy can be a convenient and effective way to manage injuries and guide
								your recovery.{' '}
							</Trans>
						</p>
					</div>

					<div className=" text-wrapper   w-2/5 absolute  font-semibold  bottom-[-15%] left-20 ">
						<p>
							<Trans i18nKey="description.part2">
								"Let's not wait for perfect conditions to begin. Let's begin to make perfection
								conditions for a healthy physical condition"
							</Trans>
						</p>{' '}
						<Trans i18nKey="description.part5">
							{' '}
							<small className="text-xs small">Joerg Teichmann</small>
						</Trans>
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
						<br />
					</div>
					<Trans i18nKey="description.part1">
						<p className="text-white text-center mt-10">
							<br />
							Vernicke is a platform that connects physiotherapists with patients. The platform is a tool
							that helps patients to find the best physiotherapist for them
						</p>
					</Trans>
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
				<div className="absolute ">
					<span>
						<a
							href="https://www.youtube.com/channel/UCIvlK9PeLuPdg-PMC1Ln-fA/featured"
							target="_blank"
							rel="noreferrer"
						>
							<Trans i18nKey="description.part4">Visit my Channel on youtube </Trans>
						</a>
					</span>
				</div>
			</section>
		</div>
	);
}

export default LandingPage;
