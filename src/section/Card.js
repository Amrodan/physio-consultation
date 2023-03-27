import React from 'react';
import ala2 from '../assets/images/ala2.jpg';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/card.css';

function Card() {
	const navigate = useNavigate();

	function handleBookNowClick() {
		navigate('/calendar');
	}

	return (
		<div className="flex justify-center">
			<div id="card" className="w-3/4 lg:flex my-28">
				<div
					className="h-48 lg:h-auto card border-none flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
					title="Card Profile Image"
				>
					<img src={ala2} alt="physio profile" />
				</div>
				<div className="border-r border-b text-center border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-cadetBlue rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
					<div className="mb-8">
						<div className="text-gray-900 font-bold text-xl mb-2 break-words">
							<h3> Ala'a Kanj - Physiotherapist in Tripoli, Lebanon</h3>
						</div>
						<div className="flex justify-center mt-10">
							<div className="line line_wrap w-36 max-w-1/10 h-0.5 bg-green-800" />
						</div>
						<p className="text-gray-700 text-base leading-10 mt-10">
							Wernicke connects physiotherapists with patients. Find the best physiotherapist for you and
							book an appointment today.
						</p>
					</div>
					<div className="flex justify-center">
						<div className="text-gray-300 space-x-4">
							<button
								onClick={handleBookNowClick}
								className="bg-gray-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
							>
								<Link to="/calendar">Book Now</Link>
							</button>
							<button className="bg-gray-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
								<Link to="/contact">Message</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
