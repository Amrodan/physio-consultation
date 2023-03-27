import React, { useState } from 'react';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../components/firebase';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import 'firebase/firestore';

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

const AppointmentDialog = (props) => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ date, setDate ] = useState('');

	const [ error, setError ] = useState('');

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
	const [ Report ] = useState(null);
	const classes = useStyles();
	// const Value = props.SendDate;

	// let ValueDate = Value.getDate();

	// let ConfirmValueDate;
	// if (
	// 	ValueDate === 1 ||
	// 	ValueDate === 2 ||
	// 	ValueDate === 3 ||
	// 	ValueDate === 4 ||
	// 	ValueDate === 5 ||
	// 	ValueDate === 6 ||
	// 	ValueDate === 7 ||
	// 	ValueDate === 8 ||
	// 	ValueDate === 9
	// ) {
	// 	ConfirmValueDate = '0' + ValueDate;
	// } else {
	// 	ConfirmValueDate = ValueDate;
	// }
	// const DefaultValue = `${ValueYear}-${ValueMonth + 1}-${ConfirmValueDate}`;

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

	return (
		<div>
			<br />
			{
				//* only admin
			}{' '}
			{/* <TableContent deleteUserPost={deleteUserPost} list={list} /> */}
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
