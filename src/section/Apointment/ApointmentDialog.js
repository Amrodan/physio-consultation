import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// import firebase from 'firebase/app';
import 'firebase/firestore';
import { collection, addDoc, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore';
import { db } from '../../components/firebase';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	dialog: {
		width: '70%'
	},
	MuiInput: {
		root: {
			borderRadius: 0,
			backgroundColor: '#fff',
			border: '1px solid pink',
			fontSize: 16,
			padding: '10px 12px',
			width: 'calc(100% - 24px)'
		}
	}
}));
// const Time = document.getElementById('time').value;
// const Name = document.getElementById('name').value;
// const Phone = document.getElementById('phone').value;
// const Email = document.getElementById('email').value;
// const AppDate = document.getElementById('date').value;

const AppointmentDialog = (props) => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ date, setDate ] = useState('');
	const [ list, setList ] = useState([]);
	const [ error, setError ] = useState('');
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

	async function handleSubmit(e) {
		e.preventDefault();

		const appointmentCollectionRef = collection(db, 'bookedtime');
		const payload = { key: name, name: name, phone: phone, email: email, time: AppInfo, date: date };

		const queri = query(appointmentCollectionRef, where('date', '==', date), where('time', '==', AppInfo));

		const querySnapshot = await getDocs(queri);

		if (querySnapshot.size > 0) {
			setError('Sorry, the appointment you selected is not available. Please choose a different time.');
		} else {
			addDoc(appointmentCollectionRef, payload)
				.then((snapshot) => {
					console.log(snapshot);
				})
				.catch((err) => {
					console.log(err.message);
				});
			setName('');
			setEmail('');
			setPhone('');
			setDate('');
			setOpen(false);
		}
	}

	const setOpen = props.SetDialog;
	const open = props.openDialog;
	const AppInfo = props.AppInformation;
	const [ Report, SetReport ] = useState(null);
	const classes = useStyles();
	const Value = props.SendDate;
	const ValueYear = Value.getFullYear();
	const ValueMonth = Value.getMonth();
	let ValueDate = Value.getDate();

	let ConfirmValueDate;
	if (
		ValueDate === 1 ||
		ValueDate === 2 ||
		ValueDate === 3 ||
		ValueDate === 4 ||
		ValueDate === 5 ||
		ValueDate === 6 ||
		ValueDate === 7 ||
		ValueDate === 8 ||
		ValueDate === 9
	) {
		ConfirmValueDate = '0' + ValueDate;
	} else {
		ConfirmValueDate = ValueDate;
	}
	const DefaultValue = `${ValueYear}-${ValueMonth + 1}-${ConfirmValueDate}`;

	const DisabledDate = new Date();
	const Year = DisabledDate.getFullYear();
	const Month = DisabledDate.getMonth();
	let CurrentDate = DisabledDate.getDate();
	let ConfirmCurrentDate;
	if (
		CurrentDate === 1 ||
		CurrentDate === 2 ||
		CurrentDate === 3 ||
		CurrentDate === 4 ||
		CurrentDate === 5 ||
		CurrentDate === 6 ||
		CurrentDate === 7 ||
		CurrentDate === 8 ||
		CurrentDate === 9
	) {
		ConfirmCurrentDate = '0' + CurrentDate;
	} else {
		ConfirmCurrentDate = CurrentDate;
	}
	const DisabledPast = `${Year}-${Month + 1}-${ConfirmCurrentDate}`;

	const handleClose = () => {
		setOpen(false);
	};
	// const apointment = async () => {};

	// const HandleSubmitForm = (e) => {
	// 	const Time = document.getElementById('time').value;
	// 	const Name = document.getElementById('name').value;
	// 	const Phone = document.getElementById('phone').value;
	// 	const Email = document.getElementById('email').value;
	// 	const AppDate = document.getElementById('date').value;

	// 	const AppInformation = {
	// 		time: Time,
	// 		name: Name,
	// 		phone: Phone,
	// 		email: Email,
	// 		date: AppDate
	// 	};

	// 	fetch('https://taj-doctors-portal.herokuapp.com/appointment', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-type': 'application/json; charset=UTF-8'
	// 		},
	// 		body: JSON.stringify(AppInformation)
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			document.getElementById('submitReport').innerText = 'Your appointment has been successfully submitted.';
	// 			SetReport({ color: 'green' });
	// 		})
	// 		.catch((err) => {
	// 			document.getElementById('submitReport').innerText = 'Submission failed. Please try again.';
	// 			SetReport({ color: 'red' });
	// 		});
	// 	e.target.reset();
	// 	e.preventDefault();
	// };

	return (
		<div>
			<br />
			{
				//* only admin
			}{' '}
			<div className="flex justify-center">
				<table className="w-8/12 border-collapse h-80		">
					<thead>
						<tr>
							<th className="border-solid border-2 border-b		">Name</th>
							<th className="border-solid border-2 h-3/5border-b	">Email</th>
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
			<div>
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="form-dialog-title w-32 "
					classes={{ paper: classes.dialog }}
				>
					<DialogTitle id="form-dialog-title">{AppInfo.title}</DialogTitle>
					<DialogContent>
						<form onSubmit={handleSubmit} className="w-auto">
							<TextField
								className="appointment_textField"
								id="time"
								label="Start @"
								value={AppInfo.time}
								variant="outlined"
								fullWidth
								disabled
							/>
							<TextField
								className="appointment_textField"
								id="name"
								label="Your Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								variant="outlined"
								type="text"
								fullWidth
								required
							/>
							<TextField
								className="appointment_textField"
								id="phone"
								label="Phone Number"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								variant="outlined"
								type="phone"
								fullWidth
								required
							/>
							<TextField
								className="appointment_textField"
								id="email"
								label="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								variant="outlined"
								type="email"
								fullWidth
								required
							/>
							<TextField
								className="appointment_textField"
								id="date"
								variant="outlined"
								value={date}
								onChange={(e) => setDate(e.target.value)}
								onClick={(e) => setError('')}
								type="date"
								// defaultValue={DefaultValue}
								InputProps={{ inputProps: { min: DisabledPast } }}
								fullWidth
								required
							/>
							<p id="submitReport" style={Report} />
							<div className="flex justify-between">
								<button
									onClick={handleClose}
									className="appointment_textFiled_cancel_btn border-2 rounded-md h-auto hover:bg-cyan-600 text-cyan-500	 border-sky-700	 border-solid		 w-28"
								>
									Cancel
								</button>
								<p className="text-red-600 ml-6">{error}</p>
								<input
									type="submit"
									value="Submit"
									className="appointment_textFiled_send_btn cursor-pointer w-28 p-2.5	hover:bg-cyan-600 border-sky-700 text-cyan-500	 border-solid		"
								/>{' '}
							</div>
						</form>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
};

export default AppointmentDialog;
