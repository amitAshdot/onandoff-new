import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import AlertContext from '../../context/alert/AlertContext';
import { withRouter } from 'react-router-dom';

const Login = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { login, error, clearErr, isAuthenticated } = authContext;


    useEffect(() => {
        if (isAuthenticated)//check authContext
            props.history.push('/');
        if (error === 'wrong username or password') {
            setAlert('שם משתמש או סיסמה לא נכונים', 'danger');
            clearErr();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, props.history])


    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const { email, password } = user;

    //change input state
    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') setAlert('אנא מלא את כל התאים', 'danger');
        else {
            login({//authContext function
                email,
                password
            })
        }
    };


    return (
        <div className='formContainer'>
            <form onSubmit={onSubmit}>
                <h2>התחבר</h2>

                <div className="forminput">
                    <label htmlFor="email">אימייל:</label>
                    <input type="email" placeholder="אימייל" name='email' value={email} onChange={onChange} />
                </div>
                <div className="forminput">
                    <label htmlFor="password">סיסמה:</label>
                    <input type="password" placeholder="סיסמה" name='password' value={password} onChange={onChange} />
                </div>

                <div className="formBtn">
                    <input type="submit" value="התחבר" />
                </div>
            </form>
        </div>
    )
}

export default withRouter(Login);
