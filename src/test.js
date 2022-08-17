// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';

// export default function App() {
// 	const firebaseConfig = {
// 		apiKey: 'AIzaSyDg0cFVMCqmtY81nzPpeXg3197Nus2vcz8',
// 		authDomain: 'physiochat-a.firebaseapp.com',
// 		projectId: 'physiochat-a',
// 		storageBucket: 'physiochat-a.appspot.com',
// 		messagingSenderId: '687829662535',
// 		appId: '1:687829662535:web:76712b50aa7ce74d936a62',
// 		measurementId: 'G-4L3E67PF5H'
// 	};

// 	// get collection data
// 	initializeApp(firebaseConfig);

// 	// init services
// 	const db = getFirestore();

// 	// collection ref
// 	const colRef = collection(db, 'books');

// 	// get collection data
// 	getDocs(colRef)
// 		.then((snapshot) => {
// 			// console.log(snapshot.docs)
// 			let books = [];
// 			snapshot.docs.forEach((doc) => {
// 				books.push({ ...doc.data(), id: doc.id });
// 			});
// 			console.log(books);
// 		})
// 		.catch((err) => {
// 			console.log(err.message);
// 		});
// }
