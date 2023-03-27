import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import './styles/app.css';
import './i18n';
// import AdminProvider from './context/adminContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <AdminProvider> */}
		<App />
		{/* </AdminProvider> */}
	</React.StrictMode>
);
