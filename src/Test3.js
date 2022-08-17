import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { colRef, db } from './firebase';
import { useState, useEffect } from 'react';
export default function Test3() {
	const [ name, setName ] = useState('');

	// useEffect(() => {
	// 	getMovies();
	// }, []);
	// useEffect(
	// 	() => {
	// 		console.log(name);
	// 	},
	// 	[ name ]
	// );

	// function getMovies() {
	// 	const movieCollectionRef = collection(db, 'movies');

	// 	getDocs(movieCollectionRef)
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
	function handleSubmit(e) {
		e.preventDefault();
		if (name === '') {
			return;
		}
		const movieCollectionRef = collection(db, 'movies');
		// const payload = { name: 'black' };
		addDoc(movieCollectionRef, { name })
			.then((snapshot) => {
				console.log(snapshot);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">add movie </label>
				<input
					id="name"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					// className="appointment_textFiled_send_btn cursor-pointer w-28 p-2.5	hover:bg-cyan-600	"
				/>
				<button type="submit">add</button>
			</form>
		</div>
	);
}
// get collection data
// getDocs(colRef)
// 	.then((snapshot) => {
// 		// console.log(snapshot.docs)
// 		let books = [];
// 		snapshot.docs.forEach((doc) => {
// 			books.push({ ...doc.data(), id: doc.id });
// 		});
// 		console.log(books);
// 	})
// 	.catch((err) => {
// 		console.log(err.message);
// 	});
// const movie = movies.map(do=>

// 	{
// 		  do.data(),
// 		 do.id,

// 	})
// const firebaseConfig = {
// 	apiKey: 'AIzaSyDg0cFVMCqmtY81nzPpeXg3197Nus2vcz8',
// 	authDomain: 'physiochat-a.firebaseapp.com',
// 	projectId: 'physiochat-a',
// 	storageBucket: 'physiochat-a.appspot.com',
// 	messagingSenderId: '687829662535',
// 	appId: '1:687829662535:web:76712b50aa7ce74d936a62',
// 	measurementId: 'G-4L3E67PF5H'
// };

// get collection data
// initializeApp(firebaseConfig);

// init services

// collection ref
