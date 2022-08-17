import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// 	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// 	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
// 	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// 	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// 	appId: process.env.REACT_APP_FIREBASE_APP_ID
// };
const firebaseConfig = {
	apiKey: 'AIzaSyDg0cFVMCqmtY81nzPpeXg3197Nus2vcz8',
	authDomain: 'physiochat-a.firebaseapp.com',
	projectId: 'physiochat-a',
	storageBucket: 'physiochat-a.appspot.com',
	messagingSenderId: '687829662535',
	appId: '1:687829662535:web:76712b50aa7ce74d936a62',
	measurementId: 'G-4L3E67PF5H'
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const colRef = collection(db, 'movies');
const auth = getAuth(app);
export { auth };
