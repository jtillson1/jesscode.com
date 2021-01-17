import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import '../index.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CancelIcon from '@material-ui/icons/Cancel';
function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        //validate the email information
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else { //vallidate the other inputs
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        //The name property of target in this expression actually 
        //refers to the name attribute of the form element.
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <React.Fragment>
            {/* Hero unit */}
            <div className="heroContent">

                <Container maxWidth="sm">
                    <span align="left" className="close"><a href="/">{<CancelIcon />}</a></span>
                    <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
                        Contact Me
</Typography>
                    <Typography className="bio" variant="h5" align="justify-center" color="textSecondary" paragraph>
                        <form action="mailto:jess@jesscode.com" id="contact-form" onSubmit={handleSubmit}>
                            <input type="text" id="formInput" placeholder="Name" name="name" defaultValue={name} onBlur={handleChange} />
                            <input type="email" placeholder="Email" id="formInput" name="email" defaultValue={email} onBlur={handleChange} />
                            <div>
                                <textarea placeholder="What do you want to say..." name="message" id="formInput" defaultValue={message} onBlur={handleChange} rows="5" />
                            </div>
                            {errorMessage && (
                                <div>
                                    <p className="error-text">{errorMessage}</p>
                                </div>
                            )}
                            <button type="submit">Submit</button>
                        </form>
                    </Typography>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default ContactForm;