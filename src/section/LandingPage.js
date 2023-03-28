import run from '../assets/images/run.jpg';
import '../styles/landing.css';
import { Link } from 'react-router-dom';

import { useTranslation, Trans } from 'react-i18next';
import Landingtext from '../components/Landing_text';
function LandingPage() {
	const { t, i18n } = useTranslation();

	return (
		<>
			<div className=" item 	 ">
				<div className="item__img ">
					<picture>
						<img src={run} alt="logo" />
					</picture>
					<span className="btn_span top-auto bottom-1  left-1/3 align-text-top absolute  ">
						<button className="bg-gray-800 	 hover:bg-green-900	 text-white font-bold   rounded">
							<Link to="/newsFeed">
								<Trans i18nKey="description.part6">Ask the Expert</Trans>
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

			<Landingtext />
		</>
	);
}

export default LandingPage;
