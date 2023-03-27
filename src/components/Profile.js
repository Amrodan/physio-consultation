// import './profile.css';
// import  {useEffect} from 'react' ;
// import { useAuthValue } from '../context/AuthContext';
// import { signOut } from 'firebase/auth';
// import { auth } from '../components/firebase';
// import { useNavigate } from 'react-router-dom';
// // import { getFirestore, collection, getDocs } from 'firebase/firestore';

// function Profile() {
//   // const db = getFirestore();

// 	// collection ref
// 	// const colRef = collection(db, 'books');

// 	// get collection data
// 	// getDocs(colRef)
// 	// 	.then((snapshot) => {
// 	// 		// console.log(snapshot.docs)
// 	// 		let books = [];
// 	// 		snapshot.docs.forEach((doc) => {
// 	// 			books.push({ ...doc.data(), id: doc.id });
// 	// 		});
// 	// 		console.log(books);
// 	// 	})
// 	// 	.catch((err) => {
// 	// 		console.log(err.message);
// 	// 	});
//   const {currentUser} = useAuthValue()
//   // console.log(currentUser)
// let history = useNavigate()
// 	let adminUid = 'nrQh9Ygk27cxw0BiAxvrFJ1nSa13'

// //   useEffect(
// // 		() => {
// //       const isadmin = async () => {

// //         currentUser.uid === adminUid &&
// // 					history('/adminPage')  ;
// // 				}

// //         isadmin();
// // 		},
// // 		[ ]
// // 	);
//     return (
//     <div className='justify-center flex m-8'>
//       <div className='profile'>
//         <h1>Profile</h1>

//         <p><strong>Email: </strong>{ currentUser?.email}</p>
//         <p>Welcome {currentUser?.displayName}</p>
//         <p>
//           <strong>Email verified: </strong>
//           {`${currentUser?.emailVerified}`}
//         </p>

//        <button onClick={() => history('/signin') } > <span onClick={() => signOut(auth) }>Sign Out</span></button>
//       </div>
//     </div>
//   )
// }

// export default Profile
import './profile.css';
import { useEffect, useState } from 'react';
import { useAuthValue } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../components/firebase';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { currentUser } = useAuthValue();
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setEmail(currentUser.email || '');
      setDisplayName(currentUser.displayName || '');
      setEmailVerified(currentUser.emailVerified || false);
    }
  }, [currentUser]);

  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className='profile-container'>
      <header className='profile-header'>
        <h1>Profile</h1>
      </header>
      <section className='profile-info'>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Name:</strong> {displayName}
        </p>
        <p>
          <strong>Email verified:</strong> {`${emailVerified}`}
        </p>
      </section>
      <section className='profile-actions'>
        <button className='primary-button' onClick={handleSignOut}>
          Sign Out
        </button>
      </section>
    </main>
  );
}

export default Profile;
