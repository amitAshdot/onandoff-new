import React, { useState } from 'react'

const SendFeedBack = (props) => {
	const [state, setstate] = useState({
		name: props.name,
		title: props.title,
		email: props.email,
		message: props.message,
		template_params: {
			"send_to": "amitashdot@gmail.com",
			"reply_to": props.email,
			"to_name": props.name,
			"message_html": `
				שלום ${props.name} שלח הודעה,
			   מייל: ${props.email}
				${props.message}		
				`,
			name: 'onAndOff',
			email: 'dont-reply@onandoff.com'
		},
		// feedback: props.message
	})
	const handleSubmit = (e) => {
		e.preventDefault();
		setstate({
			...state,
			name: props.name,
			title: props.title,
			email: props.email,
			message: props.message,
			template_params:{
			"send_to": "amitashdot@gmail.com",
			"reply_to": props.email,
			"to_name": props.name,
			"message_html": `שלום ${props.name} שלח הודעה,
			   מייל: ${props.email}
				${props.message}`,
			name: 'onAndOff',
			email: 'dont-reply@onandoff.com'
			}
			// reply_to: props.email,
			// to_name: props.name,
			// message_html: props.message
		})
		let service_id = "default_service";
		let template_id = "feedback";
		console.log('name: ' + props.name)
		console.log('email: ' + props.email)
		console.log('message: ' + props.message)

		debugger
		window.emailjs.send(service_id, template_id, state.template_params)
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
		// window.emailjs.send(service_id, template_id, state.template_params)
		// 	.then(res => {
		// 		console.log('Email successfully sent!')
		// 	})
		// 	// Handle errors here however you like, or use a React error boundary
		// 	.catch(err => console.error('Oh no, Here some thoughts on the error:', err))
	}

	return (
		<div>
			<form className="test-mailing" style={{ display: 'block' }}>
				<div>

					<textarea
						disabled
						id="test-mailing"
						name="test-mailing"
						placeholder="Post some lorem ipsum here"
						required
						value={props.message}
						style={{ width: '100%', height: '150px' }}
					/>
				</div>
				<input type="button" value="Submit" className="btn btn--submit" onClick={handleSubmit} />
			</form>
			{/* <button className="btn btn--submit" onClick={handleSubmit} >שלח</button> */}

		</div>
	)
}
export default SendFeedBack




// import React, {useState} from 'react'

//  const SendFeedBack = (props) => {
// const [state, setstate] = useState({
// 		fname: '',
// 		lname: '',
// 		email: '',
// 		message: '',
// })
// const handleFormSubmit = ( event ) => {
// 	event.preventDefault();
// 	console.log(state);
//   }
//   const onChange = e => { setstate({ ...state, [e.target.name]: e.target.value }); }
// 	return (
// 		<div>
// 			<p>Contact Me</p>
// 			<div>
// 				<form action="./action/mail.php"  method="POST">
// 					<label>שם פרטי</label>
// 					<input type="text" id="fname" name="fname" value={state.fname} placeholder="Your name.." onChange={onChange}/>
// 					<label>שם משפחה</label>
// 					<input type="text" id="lname" name="lname" value={state.lname} placeholder="Your last name.." onChange={onChange}/>


// 					<label>אימייל</label>
// 					<input type="email" id="email" name="email" value={state.email} placeholder="Your email" onChange={onChange}/>


// 					<label>הודעה</label>
// 					<textarea id="subject" name="message"  value={state.message} placeholder="Write something.." onChange={onChange}></textarea>
// 					<input type="submit" value="Submit" />
// 				</form>
// 			</div>
// 		</div>
// 	)
// }
// export default SendFeedBack
