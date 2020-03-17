import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            template_params: {
                "send_to": props.user.email,
                "reply_to": "no_reply@onandoff.co.il",
                "to_name": props.user.name,
                "message_html": `          
                  <div width="100%" cellspacing="0" cellpadding="0">
                  <a  class=”link” href="${window.location.href}verify?${props.user.vkey}" target="_blank">
                      לחץ כאן             
                  </a>
                   </div>`,
                name: 'onAndOff',
                email: 'verify@onandoff.com'
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.handleSubmit();
    }

    render() {
        return (
            <form className="test-mailing" style={{ display: 'none' }}>
                <div>
                    <textarea
                        id="test-mailing"
                        name="test-mailing"
                        placeholder="Post some lorem ipsum here"
                        required
                        value={this.state.feedback}
                        style={{ width: '100%', height: '150px' }}
                    />
                </div>
                <input type="button" value="Submit" className="btn btn--submit" onLoad={this.handleSubmit} />
            </form>
        )
    }


    handleSubmit(event) {

        const templateId = 'template_il2lEXZL';
        const service_id = "default_service";
        window.emailjs.send(service_id, templateId, this.state.template_params);

        // this.sendFeedback(templateId, { message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email }, template_params)
    }

    sendFeedback(templateId, variables, template_params) {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh no, Here some thoughts on the error:', err))
    }
}
