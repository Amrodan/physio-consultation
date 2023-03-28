import { useState, useEffect, memo } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore';
import { db } from './../components/firebase';
import { useAuthValue } from '../context/AuthContext';
// import { v4 as uuid } from 'uuid';
import { useParams, useNavigate } from 'react-router-dom';
function Post(props) {
	const { id } = useParams();
	const [ input, setInput ] = useState('');
	const [ comments, setComments ] = useState([]);
	let adminEmail = 'amrdandashli@gmail.com';
	const { currentUser } = useAuthValue();
	const navigate = useNavigate();
	let isAdmin = currentUser && currentUser.email === adminEmail;
	const usersCollectionRef = collection(db, 'comment');

	const [ showReplyForm, setShowReplyForm ] = useState(false);

	function handleCommentSubmit(event) {
		event.preventDefault();
		const comment = event.target.elements.comment.value;

		setComments([ ...comments, { postId: id, comment, userId, currentUser, userName } ]);
		if (!input) {
			return;
		} else {
			setComments([ ...comments, { postId: id, comment, userId, currentUser, userName } ]);

			setInput('');
			const movieCollectionRef = collection(db, 'comment');
			const payload = { postId: id, comment, userId, userName };

			addDoc(movieCollectionRef, payload)
				.then((snapshot) => {
					console.log(snapshot);
				})
				.catch((err) => {
					console.log(err.message);
				});
		}
	}

	useEffect(
		() => {
			const getUsersPosts = async () => {
				const queri = query(usersCollectionRef, where('postId', '==', id));
				const data = await getDocs(queri);
				setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			};

			getUsersPosts();
		},
		[ id, usersCollectionRef ]
	);

	let userId = currentUser.uid;
	let userName = currentUser.displayName;

	function handleChange(event) {
		event.preventDefault();
		setInput(event.target.value);
	}

	const toggleReplyForm = (event) => {
		setShowReplyForm(!showReplyForm);
	};

	const deleteUserPost = async (id) => {
		const userDoc = doc(db, 'comment', id);
		await deleteDoc(userDoc);
		const update = comments.filter((input) => input.id !== id);
		setComments(update);
	};
	return (
		<div className=" grid gap-4 m-3  ">
			{props.list.map((item) => (
				<div key={item.id} className=" flex justify-center">
					{item.id === id && (
						<p className="italic message break-words ml-4 w-9/12  " key={item.id}>
							{item.post}
						</p>
					)}
				</div>
			))}{' '}
			<div>
				{comments.map((c) => (
					<div key={c.id} className="flex justify-center  items-center font-black 	m-4     text-slate-900">
						<div className="italic break-words message h-full  ml-4 w-9/12 " key={c.comment}>
							{c.comment}

							{(isAdmin || c.userId === currentUser.uid) && (
								<div className="tooltip float-right ">
									<span
										className=" cursor-pointer"
										onClick={() => deleteUserPost(c.id)}
										type="button"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											height="24"
											viewBox="0 0 24 24"
											width="24"
										>
											<path d="M0 0h24v24H0z" fill="none" />
											<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
										</svg>
										<span className="tooltiptext">Delete Post</span>
									</span>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
			<div className="justify-center flex">
				{' '}
				<button
					className="  rounded-lg hover:bg-emerald-900 hover:text-black border-solid border-2 w-28"
					onClick={toggleReplyForm}
				>
					Reply
				</button>
			</div>
			{showReplyForm && (
				<form className="items-center m-auto" onSubmit={handleCommentSubmit}>
					<textarea
						type="text"
						id="comment"
						value={input}
						onChange={handleChange}
						name="comment"
						className="w-7/12 break-words "
					/>
					<button
						type="submit"
						className=" hover:bg-emerald-900 hover:text-black	  inline-block w-28 bg-transparent border-white  border-2 ease-out border-solid duration-700 rounded-lg"
					>
						Submit
					</button>
				</form>
			)}
			<div className="justify-center flex">
				<a href="/">
					<button
						onClick={(e) => {
							e.preventDefault();
							navigate(-1);
						}}
						className="  rounded-lg hover:bg-red-700 hover:text-white border-solid border-2 w-28"
					>
						&lt; Post
					</button>
				</a>
			</div>
		</div>
	);
}

export default memo(Post);
