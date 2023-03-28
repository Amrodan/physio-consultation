import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore';
import { db } from '../../components/firebase';
import './apointment.css';
const TableContent = () => {
	const [ list, setList ] = useState([]);
	const usersCollectionRef = collection(db, 'bookedtime');

	useEffect(() => {
		const getUsersPosts = async () => {
			const data = await getDocs(usersCollectionRef);
			setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getUsersPosts();
	}, []);

	const deleteUserPost = async (id) => {
		const userDoc = doc(db, 'bookedtime', id);
		await deleteDoc(userDoc);
		const update = list.filter((input) => input.id !== id);
		setList(update);
	};
	return (
		<div className="m-14">
			<div className="flex justify-center m-3">{/* <h2>Hello my soulmate ❤ </h2> */}</div>
			<div className="flex justify-center">
				<table className="w-10/12 border-collapse h-full		">
					<thead>
						<tr>
							<th className="border-solid border-2 border-b		">Name</th>
							<th className="border-solid border-2  border-b	">Email</th>
							<th className="border-solid border-2 border-b	">Date</th>
							<th className="border-solid border-2 border-b	">Time</th>
							<th className="border-solid border-2 border-b	">remove</th>
						</tr>
					</thead>
					{list.map((val, key) => {
						return (
							<tbody key={key}>
								<tr className="border-2 border-b border-solid	">
									<td className=" text-center  border-solid	">{val.name}</td>
									<td className=" text-center  border-solid	">{val.email}</td>
									<td className=" text-center  border-solid	">{val.date}</td>
									<td className=" text-center  border-solid	">{val.time.time}</td>
									<td
										onClick={() => deleteUserPost(val.id)}
										className=" text-center cursor-grab	hover:bg-danger border-solid	"
									>
										X
									</td>
								</tr>
							</tbody>
						);
					})}
				</table>
			</div>
		</div>
	);
};

export default TableContent;
