import React, { useState } from 'react';

import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import AppointmentDialog from './ApointmentDialog';
const CalendarContainer = styled.div`
	/* ~~~ container styles ~~~ */
	.MuiDialog-paperWidthSm {
		width: 70%;
	}
	max-width: 100%;
	margin: auto;
	margin-top: 20px;

	padding: 10px;
	border-radius: 3px;
	/* ~~~ navigation styles ~~~ */
	.MuiPaper-root.MuiDialog-paper.MuiDialog-paperScrollPaper.MuiDialog-paperWidthSm.MuiPaper-elevation24.MuiPaper-rounded {
		width: 70%;
	}
	.react-calendar__navigation {
		display: flex;
		.react-calendar__navigation__label {
			font-weight: bold;
		}
		.react-calendar__navigation__arrow {
			flex-grow: 0.333;
		}
	}
	/* ~~~ label styles ~~~ */
	.react-calendar__month-view__weekdays {
		text-align: center;
	}
	/* ~~~ button styles ~~~ */
	button {
		margin: 3px;
		background-color: #6f876f;
		border: 0;
		border-radius: 3px;
		color: white;
		padding: 5px 0;
		&:hover {
			background-color: #16d2b7;
		}
		&:active {
			background-color: #a5c1a5;
		}
	}
	.appointment_btn {
		margin: auto;
		display: flex;
		background-color: cornflowerblue;
		justify-content: center;
	}
	/* ~~~ day grid styles ~~~ */
	.react-calendar__month-view__days {
		display: grid !important;
		grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

		.react-calendar__tile {
			// max-width: initial !important;
		}
		.react-calendar__tile--range {
			box-shadow: 0 0 6px 2px black;
		}
	}
	/* ~~~ neighboring month & weekend styles ~~~ */
	.react-calendar__month-view__days__day--neighboringMonth {
		opacity: 0.7;
	}
	.react-calendar__month-view__days__day--weekend {
		color: #dfdfdf;
	}
	/* ~~~ other view styles ~~~ */
	.react-calendar__year-view__months,
	.react-calendar__decade-view__years,
	.react-calendar__century-view__decades {
		display: grid !important;
		grid-template-columns: 20% 20% 20% 20% 20%;
		&.react-calendar__year-view__months {
			grid-template-columns: 33.3% 33.3% 33.3%;
		}

		.react-calendar__tile {
			// max-width: initial !important;
		}
	}
`;
const AppointmentPage = () => {
	const [ Value, SetValue ] = useState(new Date());
	const [ AppInfo, SetAppInfo ] = useState({
		key: '',
		title: '',
		time: ''
	});
	const [ open, setOpen ] = useState(false);
	// const Auth = Authentication();

	const handleClickOpen = () => {
		setOpen(true);
	};
	return (
		<div>
			<CalendarContainer>
				<div className="slider_main_container">
					<div className="container">
						<div className="row">
							<div>
								<div>
									<h1 className="text-center mb-6">Appointment</h1>
									<Calendar
										Value={Value}
										onChange={SetValue}
										minDate={new Date()}
										showFixedNumberOfWeeks={true}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section className="grid grid-column">
					<div className="available_appointments_main_container">
						<h1 className="main_title_appointmentPage text-center">
							{Value.toDateString()} <pre> </pre>Choose the date below
						</h1>
						<div className=" grid-cols-3 grid gap-8 grid-rows-2  ">
							<div className="bg-sky-900	 ">
								<div className="appointmentPage_categories mt-8	py-10	px-5 shadow-md shadow-blue-800	rounded-md	">
									{/* <h4 className="main_title_appointmentPage">Teeth Orthodontics</h4> */}
									<h6 className="text-center h-16	">8:00 AM - 9:00 AM</h6>
									{/* <p className="footer_paragraph_address">10 SPACES AVAILABLE</p> */}
									<button
										onClick={() => {
											SetAppInfo({
												key: 'F06',
												title: 'Pediatrie',
												time: '8:00 AM - 9:00 AM'
											});
											handleClickOpen();
										}}
										className="appointment_btn w-44	"
									>
										BOOK APPOINTMENT
									</button>
								</div>
							</div>

							<div className="bg-sky-900	 ">
								<div className="appointmentPage_categories mt-8	py-10	px-5 shadow-md shadow-blue-800	rounded-md	">
									{/* <h4 className="main_title_appointmentPage">Teeth Orthodontics</h4> */}
									<h6 className="text-center h-16	">9:00 AM - 10:00 AM</h6>
									{/* <p className="footer_paragraph_address">10 SPACES AVAILABLE</p> */}
									<button
										onClick={() => {
											SetAppInfo({
												key: 'F06',
												title: 'Pediatrie',
												time: '9:00 AM - 10:00 AM'
											});
											handleClickOpen();
										}}
										className="appointment_btn w-44"
									>
										BOOK APPOINTMENT
									</button>
								</div>
							</div>

							<div className=" bg-sky-900	">
								<div className="appointmentPage_categories mt-8	py-10	px-5 shadow-md shadow-blue-800	rounded-md	">
									{/* <h4 className="main_title_appointmentPage">Teeth Orthodontics</h4> */}
									<h6 className="text-center h-16	">11:00 AM - 12:00 AM</h6>
									{/* <p className="footer_paragraph_address">10 SPACES AVAILABLE</p> */}
									<button
										onClick={() => {
											SetAppInfo({
												key: 'F06',
												title: 'Pediatrie',
												time: '11:00 AM - 12:00 AM'
											});
											handleClickOpen();
										}}
										className="appointment_btn w-44"
									>
										BOOK APPOINTMENT
									</button>
								</div>
							</div>

							<div className="bg-sky-900	">
								<div className="appointmentPage_categories mt-8	py-10	px-5 shadow-md shadow-blue-800	rounded-md	">
									{/* <h4 className="main_title_appointmentPage">Teeth Orthodontics</h4> */}
									<h6 className="text-center h-16	">1:00 PM - 2:00 PM</h6>
									{/* <p className="footer_paragraph_address">10 SPACES AVAILABLE</p> */}
									<button
										onClick={() => {
											SetAppInfo({
												key: 'F06',
												title: 'Pediatrie',
												time: '1:00 PM - 2:00 PM'
											});
											handleClickOpen();
										}}
										className="appointment_btn w-44"
									>
										BOOK APPOINTMENT
									</button>
								</div>
							</div>

							<div className="bg-sky-900	">
								<div className="appointmentPage_categories mt-8	py-10	px-5 shadow-md shadow-blue-800	rounded-md	">
									{/* <h4 className="main_title_appointmentPage">Teeth Orthodontics</h4> */}
									<h6 className="text-center h-16	">3:00 PM - 4:00 PM</h6>
									{/* <p className="footer_paragraph_address">10 SPACES AVAILABLE</p> */}
									<button
										onClick={() => {
											SetAppInfo({
												key: 'F06',
												title: 'Pediatrie',
												time: '3:00 PM - 4:00 PM'
											});
											handleClickOpen();
										}}
										className="appointment_btn w-44 "
									>
										BOOK APPOINTMENT
									</button>
								</div>
							</div>

							<div className="bg-sky-900	">
								<div className="appointmentPage_categories mt-8	py-10	px-5 shadow-md shadow-blue-800	rounded-md	">
									{/* <h4 className="main_title_appointmentPage">Teeth Orthodontics</h4> */}
									<h6 className="text-center h-16	">4:00 PM - 5:00 PM</h6>
									{/* <p className="footer_paragraph_address">10 SPACES AVAILABLE</p> */}
									<button
										onClick={() => {
											SetAppInfo({
												key: 'F06',
												title: 'Pediatrie',
												time: '4:00 PM - 5:00 PM'
											});
											handleClickOpen();
										}}
										className="appointment_btn w-44"
									>
										BOOK APPOINTMENT
									</button>
								</div>
							</div>
						</div>
						<AppointmentDialog
							openDialog={open}
							SetDialog={setOpen}
							AppInformation={AppInfo}
							SendDate={Value}
							fullWidth
						/>
					</div>
				</section>
			</CalendarContainer>
		</div>
	);
};

export default AppointmentPage;
