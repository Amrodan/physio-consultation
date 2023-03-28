import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useAuthValue } from '../context/AuthContext';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './../components/firebase';
import { useNavigate } from 'react-router-dom';

const Feed = ({ list, setList }) => {
	const { currentUser } = useAuthValue();
	const navigate = useNavigate();
	const [ post, setPost ] = useState('');

	const usersCollectionRef = collection(db, 'list');

	let adminEmail = 'amrdandashli@gmail.com';
	let isAdmin = currentUser && currentUser.email === adminEmail;
	// const isAdmin = currentUser?.email === adminEmail;

	const handleClick = (post) => {
		navigate(`/posts/${post}`);
	};
	useEffect(() => {
		// console.log(list);
		const getUsersPosts = async () => {
			const data = await getDocs(usersCollectionRef);
			setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getUsersPosts();
	}, []);

	const deleteUserPost = async (id) => {
		const userDoc = doc(db, 'list', id);
		await deleteDoc(userDoc);
		const update = list.filter((input) => input.id !== id);
		setList(update);
	};

	const handleChange = (event) => {
		event.preventDefault();
		setPost(event.target.value);
	};
	const handleAdd = async (event) => {
		event.preventDefault();
		if (!post) return;

		const id = uuid();
		const userId = currentUser.uid;
		const userName = currentUser.displayName;
		const payload = { id, post, userId, userName };

		try {
			await addDoc(usersCollectionRef, payload);
			setList((prevList) => [ ...prevList, payload ]);
			setPost('');
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div>
			<div>
				<div className=" feed_input flex  text-inherit justify-center mt-9 text-grey-900 text-black	 pb-5">
					<div className=" feed_no bg-teal-700 border-solid justify-evenly sm:w-10/12 md:w-10/12  rounded-2xl w-11/12	flex  items-center p-3 ">
						<div>
							<h4 className="font-serif text-2xl text-pink-900 create_post	">Create post</h4>
						</div>
						<form className="flex items-center p-3 " onSubmit={handleAdd}>
							<label className="flex items-center">
								<input
									type="text"
									value={post}
									onChange={handleChange}
									className="feed rounded-3xl p-2 bg-white  w-96 outline-none text-neutral-900 text-md whitespace-pre-line   placeholder-gray-500 "
									placeholder="  Share your thoughts..."
								/>

								<button
									type="button"
									onClick={handleAdd}
									className="feed_btn leading-8 ml-4 rounded-2xl hover:bg-emerald-900	 bg-yellow-300 w-20  border-none  text-base hover:text-white"
								>
									Share
								</button>
							</label>
						</form>
					</div>
				</div>
			</div>
			<div>
				{list &&
					list.slice().reverse().map((item, i) => (
						<div key={i} className="flex justify-center   font-black 	 h-24 p-2.5 text-slate-900 ">
							<div className="flex bg-slate-100 hover:bg-slate-500 cursor-pointer justify-center p-4 items-center overflow-auto break-words	pl-3  w-10/12  rounded-3xl   border-solid ">
								<div
									className="italic break-words h-full  ml-4 w-10/12 "
									key={item.userId}
									onClick={() => handleClick(item.id)}
								>
									{item.post && item.post.substring(0, 100)}...
								</div>

								{(isAdmin || item.userId === currentUser.uid) && (
									<div className="tooltip">
										<span
											className=" cursor-pointer"
											onClick={() => deleteUserPost(item.id)}
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

							{/* <button onClick={updateFormData} type="button">
							update this specific input
						</button> */}
						</div>
					))}
			</div>
		</div>
	);
};

// {posts.map((item, index) => (
// 	<div key={index} className="flex justify-center h-32 p-2.5 text-slate-400 ">
// 		<div className="flex bg-slate-100 justify-center p-4 items-center overflow-auto break-words	pl-3  w-10/12  rounded-3xl   border-solid ">

/* <img
							className="h-20 rounded-full"
							src="https://eshendetesia.com/images/user-profile.png"
							alt=""
						/> */

/* <p className="text-base p-2 flex italic w-20">
							<strong>Test User</strong>
						</p> */

// 						<p className="italic break-words ml-4 w-9/12 ">{item.text}</p>
// 						<div className=" float-right w-28">
// 							<span>
// 								<strong className="text-sm">{item.likes.length} people like it</strong>
// 							</span>
// 						</div>
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// }
export default Feed;
