import './profile.css'
import {useAuthValue} from '../Authcontext/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
 import { useNavigate } from 'react-router-dom';
 import { getFirestore, collection, getDocs } from 'firebase/firestore';

function Profile() {
  const db = getFirestore();

	// collection ref
	const colRef = collection(db, 'books');

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
  const {currentUser} = useAuthValue()
  console.log(currentUser)
let history = useNavigate()
  return (
    <div className='justify-center flex m-8'>
      <div className='profile'>
        <h1>Profile</h1>
        <p><strong>Email: </strong>{currentUser?.email}</p>
        <p>
          <strong>Email verified: </strong>
          {`${currentUser?.emailVerified}`}
        </p>

       <button onClick={() => history('/signin') } > <span onClick={() => signOut(auth) }>Sign Out</span></button>
      </div>
    </div>
  )
}

export default Profile
