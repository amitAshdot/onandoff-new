import React, { useContext, useState } from 'react';


const Contact = () => {
    const [state, setstate] = useState({
        name: '',
        title: '',
        email: '',
        message: '',
    })
    const { title, message, problem, name, email } = state;
    const onChange = e => {
        setstate({ ...state, [e.target.name]: e.target.value });
        setdetails({
            ...state,
            name: name,
            title: title,
            email: email,
            message: message,
            template_params: {
                "send_to": "eyalivne@gmail.com",
                "reply_to": email,
                "to_name": name,
                "message_html": message,
                name: 'onAndOff',
                email: 'dont-reply@onandoff.com'
            }
            // reply_to: props.email,
            // to_name: props.name,
            // message_html: props.message
        })
    }
    const [details, setdetails] = useState({
        name: name,
        title: title,
        email: email,
        message: message,
        template_params: {
            "send_to": "amitashdot@gmail.com",
            "reply_to": email,
            "to_name": name,
            "message_html": message,
            name: 'onAndOff',
            email: 'dont-reply@onandoff.com'
        },
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        let service_id = "default_service";
        let template_id = "feedback";
        window.emailjs.send(service_id, template_id, details.template_params)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div >

            <h2>רוצים לשמוע עוד?</h2>
            <div className="contactUs">

                <div className="rightSide">
                    <div className="contactUs-input">
                        <p className="info-input">שם</p>
                        <input type="text" className="websit-form-input" name='name' value={name} onChange={onChange} placeholder='ישראל ישראלי' />
                        <div className="input-border" ></div>
                    </div>

                    <div className="contactUs-input">
                        <p className="info-input">אימייל</p>
                        <input type="text" className="websit-form-input" name='email' value={email} onChange={onChange} placeholder='example@gmail.com' />
                        <div className="input-border" ></div>
                    </div>

                    <div className="contactUs-input">
                        <p className="info-input">כותרת</p>
                        <input type="text" className="websit-form-input" name='title' value={title} onChange={onChange} placeholder='כותרת' />
                        <div className="input-border" ></div>
                    </div>
                </div>
                <div className="leftSide">

                    <textarea type="text" className="websit-form-input" name='message' value={message} onChange={onChange} placeholder='הודעה' />
                    {/* <SendFeedBack name={name} email={email} message={message} title={title} onChange={onChange}/> */}
                    <form className="test-mailing" style={{ display: 'block' }}>
                        <div>

                            <textarea
                                disabled
                                id="test-mailing"
                                name="test-mailing"
                                placeholder="Post some lorem ipsum here"
                                required
                                value={message}
                                style={{ width: '100%', height: '150px' }}
                            />
                        </div>
                        <input type="button" value="שלח" className="btn btn--submit" onClick={handleSubmit} />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact