import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import AuthContext from '../../context/auth/AuthContext';
import {withRouter} from 'react-router-dom';
const Register = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const { setAlert } = alertContext;
    const { register, error, clearErr, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }
        if (error === 'User already exist!') {
            setAlert('המשתמש כבר קיים במערכת!', 'danger');
            clearErr();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, props.history])
    // const userContext = userContext(UserContext);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, email, password, password2 } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setAlert('אנא מלא את כל השדות', 'danger');
        } else if (password !== password2) {
            setAlert('הסיסמה אינה תואמת');
        }
        else register({ name, email, password })
    };


    return (
        <div className='formContainer'>
            <form onSubmit={onSubmit}>
                <h2>טופס הרשמה</h2>
                <div className="forminput">
                    <label htmlFor="name">שם:</label>
                    <input type="text" placeholder="שם" name='name' value={name} onChange={onChange} required />
                </div>
                <div className="forminput">
                    <label htmlFor="email">אימייל:</label>
                    <input type="email" placeholder="אימייל" name='email' value={email} onChange={onChange} required />
                </div>
                <div className="forminput">
                    <label htmlFor="password">סיסמה:</label>
                    <input type="password" placeholder="סיסמה" name='password' value={password} minLength='6' onChange={onChange} required />
                </div>
                <div className="forminput">
                    <label htmlFor="password2">אימות סיסמה:</label>
                    <input type="password" placeholder="אימות סיסמה" name='password2' value={password2} minLength='6' onChange={onChange} required />
                </div>
                <div className="formBtn">
                    <input type="submit" value="הירשם" />
                </div>
            </form>
        </div>
    )
}

export default withRouter(Register);
