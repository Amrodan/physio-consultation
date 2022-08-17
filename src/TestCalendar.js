// App.js
import 'date-fns';
import React, { useState } from 'react';
// import './app.css';

import { TextField } from '@material-ui/core';
function filterWeekends(date) {
	// Return false if Saturday or Sunday
	return date.getDay() === 0 || date.getDay() === 6;
}
const disableDates = () => {
	let date = [ '2022-01-1', '2022-02-01' ];
	const dateInt = [ new Date(date[0]), new Date(date[1]) ];
	return dateInt.includes(new Date(date)); // this is return false where in out case has to return true
};
let disableDate = [ '2022-01-01' ];
function disableRandomDates() {
	return Math.random() > 0.7;
}
function TestCalendar() {
	const [ selectedDate, setSelectedDate ] = useState('2017-05-24');

	const handleDateChange = (event) => {
		console.log(event.target.value);
		setSelectedDate(event.target.value);
	};

	return (
		<div className="App flex justify-center  mt-20 flex-row  		">
			<form noValidate className="w-1/3">
				<TextField
					id="datetime-local"
					label="Select Date & Time"
					type="datetime-local"
					defaultValue="2017-05-24T03:30"
					// InputProps={{ inputProps: { max: '2017-05-29' } }}
					value={selectedDate}
					// variant="outlined"
					shouldDisableDate={disableDate}
					onChange={handleDateChange}
					InputLabelProps={{
						shrink: true
					}}
				/>
			</form>
		</div>
	);
}

export default TestCalendar;
