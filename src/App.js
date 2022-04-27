import React from 'react';
// import '@coreui/coreui/dist/css/coreui.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import Nav from './Nav';
import LandingPage from './LandingPage';
import Card from './Card';
import Contact from './Contact';
import Footer from './Footer';
function App() {
	return (
		<div className="App">
			<Nav />
			<LandingPage />
			<Card />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
