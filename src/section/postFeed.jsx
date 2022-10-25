import { UserContext } from '../UserData';
// import Heart from 'react-animated-heart';
import React, { useState, useContext } from 'react';

export default function Postfeed() {
	let contexts = useContext(UserContext);

	// const [ like, setLike ] = useState([]);
	// const [ isClick, setClick ] = useState(false);

	// const likeHandler = () => {
	// 	setLike(isClick ? like - 1 : like + 1);
	// 	setClick(!isClick);
	// };
	return contexts.map((context) => (
		<div key={context.id} className="flex justify-center p-2.5 ">
			<div className="flex justify-center p-4 items-center overflow-auto break-words m-1.5pl-3 w-10/12 bg-white rounded-3xl   border-solid ">
				{/* <img className="h-20 rounded-full" src={context.profilePicture} alt="" /> */}
				<p className="text-base p-2 flex italic w-20">{/* <strong>{context.username}</strong> */}</p>

				<p className="italic break-words ml-4 w-9/12 ">{context.post}</p>
				<div className=" float-right w-28">
					{/* <span className="text-sm h-14  flex justify-center items-center w-24" onClick={likeHandler}>
						<Heart isClick={isClick} onClick={() => setClick(!isClick)} />
					</span> */}
					<span>
						<strong className="text-sm "> people like it</strong>
					</span>
				</div>
			</div>
		</div>
	));
}
