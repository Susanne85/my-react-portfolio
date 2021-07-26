import { React, Component, useState } from 'react';
import emailjs from 'emailjs-com'
const myNameStyle = { marginLeft: '60px' };
const myNameInputStyle = { marginLeft: '5px', flex: '1' };
const myMessageStyle = { marginLeft: '42px', lineHeight: '20', flex: '1' };
const myMessageInputStyle = { lineHeight: '20', flex: '1' };
const myErrorMessageStyle = { marginLeft: '105px', flex: '1'}
const myFormStyle = { background: '#bfbfbd', borderColor: 'blue', borderStyle: 'solid', margin: '8px' }
const myButtonStyle = { marginLeft:'115px', marginBottom:'10px'}
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            errorMessage: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log('onchange', name)
        this.setState({
            [name]: value
        });
        this.setState({ value: event.target.value });
        this.setState({ errorMessage: '' });
    }

    handleSubmit(event) {

        event.preventDefault();

        this.setState({ errorMessage: '' });

        if (this.state.name === '') {
            console.log('onchange', this.state.name);
            this.setState({ errorMessage: 'Name cannot be null' });
            return;
        }
        if (this.state.email === '') {
            this.setState({ errorMessage: 'Email Address cannot be null' });
            return;
        }
        if (this.state.message === '') {
            this.setState({ errorMessage: 'Message text cannot be null' });
            return;
        }

        alert('Submitted Details - ' + this.state.name + ' ' + this.state.email + ' ' +this.state.message)
        // emailjs.sendForm('gmail', 'template_xyqn1za', event.target, 'user_YVZ2erf2iRYzv0syXun2i')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error)=>{
        //     console.log(error)
        // })
        // event.target.reset();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={myFormStyle}>
                <label className="d-flex flex-wrap p-2" style={myNameStyle} >
                    Name:
                    <input
                        type="text"
                        name="name"
                        style={myNameInputStyle}
                        placeholder='Enter your name'
                        value={this.state.name}
                        onChange={this.handleChange} />
                </label>
                <label className="d-flex flex-wrap p-2" style={myNameInputStyle}>
                    Email Address:
                    <input
                        type="email"
                        name="email"
                        style={myNameInputStyle}
                        placeholder='Enter your email'
                        value={this.state.email}
                        onChange={this.handleChange} />
                </label>
                <label className="d-flex flex-wrap p-2" style={myMessageStyle}>
                    Message:
                    <input
                        type="textArea"
                        name="message"
                        style={myMessageInputStyle}
                        placeholder='Enter your mesage'
                        value={this.state.message}
                        onChange={this.handleChange} />
                </label>
                <label className="d-flex flex-wrap p-2 "  >
                    <input
                        type='textArea'
                        name='errorMessage'
                        style={myErrorMessageStyle}
                        readOnly={true}
                        value={this.state.errorMessage}
                    />
                </label>
                <input style={myButtonStyle}
                    type="submit"
                    value="Submit" />
            </form>
        );
    }
}



