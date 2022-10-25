import React, { useState } from 'react';
const initialList = [
	{
		id: 'a',
		task: 'Learn React',
		isComplete: false
	},
	{
		id: 'b',
		task: 'Learn GraphQL',
		isComplete: true
	}
];

const Test2 = () => {
	const [ list, setList ] = useState(initialList);

	function handleToggleComplete(id) {
		const newList = list.map((item) => {
			if (item.id === id) {
				const updatedItem = {
					...item,
					isComplete: !item.isComplete
				};

				return updatedItem;
			}

			return item;
		});

		setList(newList);
	}

	return (
		<ul>
			{list.map((item) => (
				<li key={item.id}>
					<span
						style={{
							textDecoration: item.isComplete ? 'line-through' : 'none'
						}}
					>
						{item.task}
					</span>
					<button type="button" onClick={() => handleToggleComplete(item.id)}>
						{item.isComplete ? 'Undo' : 'Done'}
					</button>
				</li>
			))}
		</ul>
	);
};
export default Test2;
