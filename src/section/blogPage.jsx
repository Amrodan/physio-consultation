import React, { useState, useRef } from 'react';
import '../index.css';

function Blog() {
	const [ newPostItem, setNewPostItem ] = useState([]);

	const input = useRef();

	var addToList = (e) => {
		e.preventDefault();
		setNewPostItem([ ...newPostItem, input.current.value ]);
	};

	const clearInput = () => (input.current.value = '');
	return (
		<div>
			<div className="blogContainer">
				<h4>Create post</h4>
				<div>
					<form className="blog" onClick={clearInput}>
						<label>
							<input ref={input} type="text" id="height" placeholder="Share your thoughts..." />
						</label>
						<button onClick={addToList} className="postBtn">
							Post
						</button>
					</form>
				</div>
			</div>

			{newPostItem.map((item, index) => (
				<div className="new_post" key={index}>
					<p className="List" key={index}>
						{item}
					</p>
				</div>
			))}
		</div>
	);
}
export default Blog;
