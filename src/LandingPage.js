import React from 'react';
import run from './assets/images/run.jpg';
import { CButton } from '@coreui/react';
function LandingPage() {
	return (
		<div className=" item__wrapper    ">
			<div className=" item 	 ">
				<div className="item__img ">
					<picture>
						<img src={run} alt="logo" />
					</picture>
				</div>
				<div className="  w-2/5 absolute  font-semibold  bottom-[-15%] left-36 ">
					<p>
						"Let's not wait for perfect conditions to begin. Let's begin to make perfection conditions for a
						healthy physical condition"
					</p>{' '}
					<small className="text-xs">Joerg Teichmann</small>
				</div>

				<div className=" w-2/5 absolute  font-semibold text-white top-32 left-36  ">
					<h2>
						Online physiotherapy can be a convenient and effective way to manage injuries and guide your
						recovery.
					</h2>
				</div>
			</div>

			<article className="  top-auto bottom-1  left-1/2        align-text-top    absolute  		  ">
				<CButton color="primary" shape="rounded-pill" className="w-32 h-16  ">
					Get Started
				</CButton>
			</article>
			<div className="text-center w-7/12 mt-16 ml-[250px] ">
				<h1 className="before:text-yellow-400  before:content-['Ph']">ysiotherapy Consultation</h1>
				<div>
					<div className="line w-36 max-w-1/10 h-0.5 bg-green-800 left-72 relative  m-12" />
				</div>
				<p className="text-white text-center">
					Vernicke is a platform that connects physiotherapists with patients. The platform is a tool that
					helps patients to find the best physiotherapist for them and also helps them to find the best
					physiotherapist for them.
				</p>
			</div>
		</div>
	);
}

export default LandingPage;
