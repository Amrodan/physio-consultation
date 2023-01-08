import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore';
import { db } from './../components/firebase';
import { useAuthValue } from '../context/AuthContext';
// import { v4 as uuid } from 'uuid';

import { useParams } from 'react-router-dom';
function Post(props) {
	const { id } = useParams();
	const [ input, setInput ] = useState('');

	const [ comments, setComments ] = useState([]);

	const usersCollectionRef = collection(db, 'comment');
	// const ide = uuid();
	const [ showReplyForm, setShowReplyForm ] = useState(false);
	const { currentUser } = useAuthValue();

	function handleCommentSubmit(event) {
		event.preventDefault();
		const comment = event.target.elements.comment.value;

		setComments([ ...comments, { postId: id, comment, userId, currentUser, userName } ]);
		if (!input) {
			return;
		} else {
			setComments([ ...comments, { postId: id, comment, userId, currentUser, userName } ]);
			// const newList = reply.concat({ input, userId, id, currentUser, userName });
			// setComments(newList);
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
			// setInput('');
		}
	}
	// const postComments = comments.filter((c) => c.id === id);

	useEffect(
		() => {
			const getUsersPosts = async () => {
				const queri = query(usersCollectionRef, where('postId', '==', id));

				const data = await getDocs(queri);
				// console.log(currentUser.uid);

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
				<div className=" flex justify-center   ">
					{item.id === id && (
						<p className="italic message break-words ml-4 w-9/12  " key={item.id}>
							{item.post}
						</p>
					)}
				</div>
			))}{' '}
			<div className="   ">
				{comments.map((c) => (
					<div key={id} className="flex justify-center  items-center font-black 	m-4     text-slate-900">
						<div className="italic break-words message h-full  ml-4 w-9/12 " key={c.comment}>
							{c.comment}

							{c.userId === currentUser.uid && (
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
			<button className=" reply   " onClick={toggleReplyForm}>
				Reply
			</button>
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
					<button type="submit" className="button">
						Submit
					</button>
				</form>
			)}
		</div>
	);
}

export default Post;