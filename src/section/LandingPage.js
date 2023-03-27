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
						<button className="bg-gray-800 	 hover:bg-green-900	 text-white font-bold   rounded">
							<Link to="/newsFeed">
								<Trans i18nKey="description.part6">Participate in Discussions</Trans>
								{/* Connect with Others */}
							</Link>
						</button>
					</span>

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
				<article className=" text-center w-11/12 md:mt-16   ">
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
					<Trans i18nKey="description.part7">
						A physiotherapist can treat you if you have a problem with pain or movement. Physiotherapy could
						help you become more mobile and make you more comfortable.
					</Trans>
				</p>
			</div>

			<div className="m-4">
				<h1 className="text-amber-500 text-2xl m-4">
					<Trans i18nKey="description.part31">What is physiotherapy?</Trans>
				</h1>
				<p className="m-4">
					{' '}
					<Trans i18nKey="description.part8">
						Physiotherapy uses physical techniques to improve movement, reduce pain and stiffness, speed up
						the healing process and increase quality of life.{' '}
					</Trans>
				</p>
				<h1 className="text-amber-500 text-2xl m-4	">
					<Trans i18nKey="description.part30"> What does a physiotherapist do?</Trans>
				</h1>
				<p className="m-4">
					{' '}
					<Trans i18nKey="description.part9">
						Physiotherapists diagnose and manage a broad range of conditions with the bones, muscles,
						cardiovascular system, nerves and other parts and systems of the body. They can help people to
						manage chronic diseases, give lifestyle advice, prescribe exercises and aids to help people
						manage better, and give advice. When you go to see a physiotherapist, they might :{' '}
					</Trans>
				</p>
				<ul>
					<li className="list-disc m-8 small-line	">
						<Trans i18nKey="description.part10">massage areas of your body</Trans>{' '}
					</li>
					<li className="list-disc m-8 small-line	">
						<Trans i18nKey="description.part11">manipulate your joints</Trans>{' '}
					</li>
					<li className="list-disc m-8 small-line	">
						{' '}
						<Trans i18nKey="description.part12">stretch your muscles</Trans>
					</li>
					<li className="list-disc m-8 small-line	">
						<Trans i18nKey="description.part13">give you exercises to do</Trans>
					</li>
				</ul>
				<p className="m-4">
					{' '}
					<Trans i18nKey="description.part14">
						A physiotherapist will assess your condition and help you with physical problems.
					</Trans>
				</p>
				<p className="m-4">
					<Trans i18nKey="description.part15">
						These might have come about because of an accident or injury, or you might have had them most of
						your life. Some physiotherapists treat children who have problems with their movement. They also
						show parents how to improve their child’s quality of life.
					</Trans>
				</p>
				<h1 className="text-amber-500 text-2xl m-4	">
					{' '}
					<Trans i18nKey="description.part16">How can physiotherapy help me?</Trans>
				</h1>
				<p className="m-4">
					<Trans i18nKey="description.part17">
						{' '}
						A physiotherapist can help treat many things, including :
					</Trans>{' '}
				</p>
				<ul className="list-disc m-4 small-line	">
					<li className="list-disc m-8 small-line	">
						<Trans i18nKey="description.part18">back and knee pain</Trans>
					</li>
					<li className="list-disc m-8 small-line ">
						{' '}
						<Trans i18nKey="description.part19">sports injuries </Trans>
					</li>
					<li className="list-disc m-8 small-line">
						<Trans i18nKey="description.part20">arthritis</Trans>{' '}
					</li>
					<li className="list-disc m-8 small-line">
						{' '}
						<Trans i18nKey="description.part21">aches, sprains and injuries</Trans>
					</li>
					<li className="list-disc m-8 small-line ">
						{' '}
						<Trans i18nKey="description.part22">
							incontinence neurological conditions, like Parkinson’s disease or multiple sclerosis
						</Trans>
					</li>
					<li className="list-disc m-8 ">
						{' '}
						<Trans i18nKey="description.part23">
							chronic diseases like diabetes, osteoarthritis, osteoporosis and obesity
						</Trans>
					</li>
					<li className="list-disc m-8 ">
						{' '}
						<Trans i18nKey="description.part24">managing after a stroke</Trans>
					</li>{' '}
					<li className="list-disc m-8 ">
						{' '}
						<Trans i18nKey="description.part25">recovery from broken bones</Trans>
					</li>{' '}
					<li className="list-disc m-8 ">
						<Trans i18nKey="description.part26">rehabilitation after surgery </Trans>
					</li>
					<li className="list-disc m-8 ">
						<Trans i18nKey="description.part27">developmental delays in children</Trans>
					</li>
					<li className="list-disc m-8 ">
						<Trans i18nKey="description.part28">occupational health</Trans>
					</li>
				</ul>
				<p className="m-4">
					<Trans i18nKey="description.part29">
						{' '}
						They can also help you reduce the chance of future injuries.
					</Trans>
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
