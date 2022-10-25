import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const initialList = [
	{
		id: 'a',
		name: 'Robin'
	},
	{
		id: 'b',
		name: 'Dennis'
	}
];
const Blogcontainer = () => {
	const [ list, setList ] = useState(initialList);
	const [ name, setName ] = useState('');

	const id = uuid();
	function handleChange(event) {
		event.preventDefault();
		setName(event.target.value);
	}

	function handleAdd(event) {
		event.preventDefault();
		if (!name) {
			return;
		} else {
			const newList = list.concat({ name, id });

			setList(newList);

			setName('');
		}
	}
	const updateFormData = (id, value) => {
		console.log(value);
		const update = list.map((input) => {
			if (input.id === id) {
				return {
					...input,
					value
				};
			}
			return input;
		});

		setList(update);
	};
	const deleteFormData = (id) => {
		const update = list.filter((input) => input.id !== id);
		setList(update);
	};

	return (
		<div>
			<div>
				<div className=" feed_input flex  text-inherit justify-center mt-9 text-grey-900 text-black	 pb-5">
					<div className=" feed_no bg-teal-700 border-solid justify-evenly   rounded-2xl w-4/5	flex  items-center p-3 ">
						<div>
							<h4 className="font-serif text-2xl text-pink-900 create_post	">Create post</h4>
						</div>
						<form className="flex items-center p-3 " onSubmit={handleAdd}>
							<label className="flex items-center">
								<input
									type="text"
									value={name}
									onChange={handleChange}
									className="rounded-3xl p-2 bg-white  w-96 outline-none text-md whitespace-pre-line   placeholder-gray-500 "
									placeholder="  Share your thoughts..."
								/>

								<button
									type="button"
									onClick={handleAdd}
									className=" leading-8 ml-4 rounded-2xl hover:bg-emerald-900	 bg-yellow-300 w-20  border-none  text-base hover:text-white"
								>
									Share
								</button>
							</label>
						</form>
					</div>
				</div>
			</div>
			<div>
				{list.map((item, i) => (
					<div key={i} className="flex justify-center font-black 	 h-32 p-2.5 text-slate-900 ">
						<div className="flex bg-slate-100 justify-center p-4 items-center overflow-auto break-words	pl-3  w-10/12  rounded-3xl   border-solid ">
							<p className="italic break-words ml-4 w-9/12 " key={item.id}>
								{item.name}
							</p>
							<div className=" float-right w-28">
								<span>
									<strong className="text-sm"> people like it</strong>
								</span>
							</div>
							<div className="tooltip">
								<span className=" cursor-pointer" onClick={() => deleteFormData(item.id)} type="button">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
										<path d="M0 0h24v24H0z" fill="none" />
										<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
									</svg>
									<span className="tooltiptext">Delete Post</span>
								</span>
							</div>
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

// export default Test;
//
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
export default Blogcontainer;
