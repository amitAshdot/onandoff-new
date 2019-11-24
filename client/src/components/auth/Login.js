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
    }, [error, isAuthenticated, props.history, clearErr])


    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const { email, password } = user;

    //change input state
    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        clearErr();
        if (email === '' || password === '') setAlert('אנא מלא את כל התאים', 'danger');
        else if (!echeck(email)) setAlert('אנא הכנס אימייל תקין', 'danger');
        else {
            login({//authContext function
                email,
                password
            })
        }
    };

    const echeck = (str) => {
        let at = "@"
        let dot = "."
        let lat = str.indexOf(at)
        let lstr = str.length
        let ldot = str.indexOf(dot)
        if (str.indexOf(at) == -1 || str.indexOf(at) == -1 || str.indexOf(at) == 0 || str.indexOf(at) == lstr) {
            alert("Invalid E-mail ID")
            return false
        }
        if (str.indexOf(dot) == -1 || str.indexOf(dot) == 0 || str.indexOf(dot) == lstr || str.indexOf(dot, (lat + 2)) == -1) {
            alert("Invalid E-mail ID")
            return false
        }
        if (str.indexOf(at, (lat + 1)) != -1 || str.substring(lat - 1, lat) == dot || str.substring(lat + 1, lat + 2) == dot) {
            alert("Invalid E-mail ID")
            return false
        }
        if (str.indexOf(" ") != -1) {
            alert("Invalid E-mail ID")
            return false
        }
        return true
    }

    return (
        <div className='formContainer'>
            <form onSubmit={onSubmit}>
                <h2>התחבר</h2>

                <div className="forminput">
                    <label htmlFor="email">אימייל:</label>
                    <input type="text" placeholder="אימייל" name='email' value={email} onChange={onChange} />
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
