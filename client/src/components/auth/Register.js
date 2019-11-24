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
        if (name === '' || email === '' || password === '') setAlert('אנא מלא את כל השדות', 'danger');
        else if (!echeck(email)) setAlert('אנא הכנס אימייל תקין', 'danger');
        else if(!checkPassword(password)) setAlert('אנא הכנס סיסמא חזקה המורכבת מאות גדולה אות קטנה, מספרים ולפחות 6 תווים' , 'danger');
        else if (password !== password2) setAlert('הסיסמה אינה תואמת');
        else register({ name, email, password })
    };

    const checkPassword = (password) =>
    {
      // at least one number, one lowercase and one uppercase letter
      // at least six characters
      var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
      return re.test(password);
    }
    const echeck = (str) => {
        let at = "@"
        let dot = "."
        let lat = str.indexOf(at)
        let lstr = str.length
        let ldot = str.indexOf(dot)
        if (str.indexOf(at) == -1 || str.indexOf(at) == -1 || str.indexOf(at) == 0 || str.indexOf(at) == lstr) {
            return false
        }
        if (str.indexOf(dot) == -1 || str.indexOf(dot) == 0 || str.indexOf(dot) == lstr || str.indexOf(dot, (lat + 2)) == -1) {
            return false
        }
        if (str.indexOf(at, (lat + 1)) != -1 || str.substring(lat - 1, lat) == dot || str.substring(lat + 1, lat + 2) == dot) {
            return false
        }
        if (str.indexOf(" ") != -1) {
            return false
        }
        return true
    }
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
                    <input type="text" placeholder="אימייל" name='email' value={email} onChange={onChange} required />
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
