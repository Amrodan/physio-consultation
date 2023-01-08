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
						<button className="bg-gray-800 	 hover:bg-sky-900	 text-white font-bold   rounded">
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
			<div className="text-center    ">
				<p className="m-4">
					{' '}
					A physiotherapist can treat you if you have a problem with pain or movement. Physiotherapy could
					help you become more mobile and make you more comfortable.
				</p>
			</div>

			<div className="m-4">
				<h1 className="text-amber-500 text-2xl m-4">What is physiotherapy?</h1>
				<p className="m-4">
					{' '}
					Physiotherapy uses physical techniques to improve movement, reduce pain and stiffness, speed up the
					healing process and increase quality of life.{' '}
				</p>
				<h1 className="text-amber-500 text-2xl m-4	"> What does a physiotherapist do?</h1>
				<p className="m-4">
					{' '}
					Physiotherapists diagnose and manage a broad range of conditions with the bones, muscles,
					cardiovascular system, nerves and other parts and systems of the body. They can help people to
					manage chronic diseases, give lifestyle advice, prescribe exercises and aids to help people manage
					better, and give advice. When you go to see a physiotherapist, they might :{' '}
				</p>
				<ul>
					<li className="list-disc m-8 small-line	">massage areas of your body </li>
					<li className="list-disc m-8 small-line	">manipulate your joints </li>
					<li className="list-disc m-8 small-line	"> stretch your muscles</li>
					<li className="list-disc m-8 small-line	">give you exercises to do</li>
				</ul>
				<p className="m-4">
					{' '}
					A physiotherapist will assess your condition and help you with physical problems.
				</p>
				<p className="m-4">
					These might have come about because of an accident or injury, or you might have had them most of
					your life. Some physiotherapists treat children who have problems with their movement. They also
					show parents how to improve their child’s quality of life.
				</p>
				<h1 className="text-amber-500 text-2xl m-4	"> How can physiotherapy help me?</h1>
				<p className="m-4"> A physiotherapist can help treat many things, including : </p>
				<ul className="list-disc m-4 small-line	">
					<li className="list-disc m-8 small-line	">back and knee pain</li>
					<li className="list-disc m-8 small-line "> sports injuries </li>
					<li className="list-disc m-8 small-line">arthritis </li>
					<li className="list-disc m-8 small-line"> aches, sprains and injuries</li>
					<li className="list-disc m-8 small-line ">
						{' '}
						incontinence neurological conditions, like Parkinson’s disease or multiple sclerosis
					</li>
					<li className="list-disc m-8 ">
						{' '}
						chronic diseases like diabetes, osteoarthritis, osteoporosis and obesity
					</li>
					<li className="list-disc m-8 "> managing after a stroke</li>{' '}
					<li className="list-disc m-8 "> recovery from broken bones</li>{' '}
					<li className="list-disc m-8 ">rehabilitation after surgery </li>
					<li className="list-disc m-8 ">developmental delays in children</li>
					<li className="list-disc m-8 ">occupational health</li>
				</ul>
				<p className="m-4"> They can also help you reduce the chance of future injuries.</p>
				<h1 className="text-amber-500 text-2xl m-4	"> Am I eligible for physiotherapy?</h1>{' '}
				<p className="m-4">
					Yes, you can see a physiotherapist at any time. You don’t have to see your doctor before you see a
					physiotherapist. However, it is good to see your doctor to talk about options and to get a referral.
					Tell your physiotherapist about any major health problems, past injuries, and how much exercise you
					do. To find one, ask a friend. Ask your doctor. Or search for physiotherapists online through the
					healthdirect service finder.
				</p>{' '}
				<h1 className="text-amber-500 text-2xl m-4	"> Cost of physiotherapy </h1>{' '}
				<p className="m-4">
					Costs vary — check before you go. Medicare covers some visits, but only if your doctor has referred
					you. If you have private health insurance, it might cover physiotherapy. Check what your plan covers
					before you go.
				</p>
			</div>
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
