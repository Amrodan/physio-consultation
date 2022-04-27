import React from 'react';
import ala2 from './assets/images/ala2.jpg';
import { CButton } from '@coreui/react';
import { CgProfile } from 'react-icons/cg';
import './card.css';
function Card() {
	return (
		<div className="flex justify-center">
			{/* <CgProfile className="text-5xl text-red" /> */}
			<div id="card" className=" w-3/4  lg:flex mt-64">
				<div
					className="h-48 lg:h-auto  w-96	 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
					title="Card Profile Image"
				>
					<img src={ala2} alt="physio profile" />{' '}
				</div>
				<div className="border-r border-b text-center border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-cadetBlue rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
					<div className="mb-8">
						{/* <p className="text-sm text-gray-600 flex items-center">
						<svg
							className="fill-current text-gray-500 w-3 h-3 mr-2"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
						</svg>
						Members only
					</p> */}
						<div className="text-gray-900 font-bold text-xl mb-2 ">
							{' '}
							<h3> Ala'a Kanj - a physiotherapist based in the city of Tripoli, Lebanon.</h3>
							<div className="line w-36 max-w-1/10 h-0.5 bg-green-800 left-44 relative  m-12" />
						</div>
						<p className="text-gray-700 text-base leading-10">
							Wernicke is a platform that connects physiotherapists with patients. The platform is a tool
							that helps patients to find the best physiotherapist for them and also helps them to find
							the best physiotherapist for them.
						</p>
					</div>
					<div className="relative ">
						{/* <img
						className="w-10 h-10 rounded-full mr-4"
						src="/img/jonathan.jpg"
						alt="Avatar of Jonathan Reinink"
					/> */}
						{/* <div className="text-sm">
							<p className="text-gray-900 leading-none">Jonathan Reinink</p>
							<p className="text-gray-600">Aug 18</p>
						</div> */}
						<div className="absolute left-[58%]  bottom-1  ">
							{' '}
							<CButton href="#booking" color="success" shape="rounded-pill" className="w-auto h-10 mr-4 ">
								Book Now
							</CButton>
							<CButton shape="rounded-pill" className="w-auto h-10 absolute bg-fixed   ">
								Message
							</CButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
