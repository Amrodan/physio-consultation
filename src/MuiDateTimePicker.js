import React from 'react';

import { Stack, TextField } from '@mui/material';
import { DateTimePicker } from '@mui/lab';
import { useState } from 'react';

export const MuiDateTimePicker = () => {
	const [ selectedDateTime, setSelectedDateTime ] = useState(new Date());
	const handleDateChange = (date) => {
		setSelectedDateTime(date);
	};
	return (
		<Stack>
			<DateTimePicker
				value={selectedDateTime}
				onChange={handleDateChange}
				ampm={false}
				label="DateTimePicker"
				showTodayButton
				showTimeSelect
				timeFormat="HH:mm"
				timeIntervals={15}
				dateFormat="MM/dd/yyyy hh:mm aa"
			/>
			<TextField
				value={selectedDateTime}
				label="DateTimePicker"
				type="datetime-local"
				onChange={handleDateChange}
				renderInput={(params) => <TextField {...params} />}
			/>
		</Stack>
	);
};
export default MuiDateTimePicker;

// 	 => {
// 		setSelectedDateTime(date);
// 	};
// 	return (
// 		<Stack spacing={2}>
// 			<TextField
// 				id="date"
// 				label="Date"
// 				type="date"
// 				value={selectedDateTime}
// 				onChange={(e) => {
// 					handleDateChange(e.target.value);
// 				}}
// 				InputLabelProps={{
// 					shrink: true
// 				}}
// 			/>
// 			<TextField
// 				id="time"
// 				label="Time"
// 				type="time"
// 				value={selectedDateTime}
// 				onChange={(e) => {
// 					handleDateChange(e.target.value);
// 				}}
// 				InputLabelProps={{
// 					shrink: true
// 				}}
// 			/>
// 			<DateTimePicker
// 				value={selectedDateTime}
// 				onChange={handleDateChange}
// 				ampm
// 				clearable
// 				label="DateTime"
// 				InputLabelProps={{
// 					shrink: true
// 				}}
// 			/>
// 		</Stack>
// 	);
// };
// export default MuiDateTimePicker;

// 	console.log({
// 		selectedDateTime
// 	});
// 	return (
// 		<div>
// 			<Stack spacing={4} sx={{ width: '250px' }}>
// 				<DateTimePicker
// 					label="Date Time Picker"
// 					value={selectedDateTime}
// 					onChange={(newValue) => {
// 						setSelectedDateTime(newValue);
// 					}}
// 					renderInput={(params) => <TextField {...params} />}
// 				/>
// 			</Stack>
// 		</div>
// 	);
// };
