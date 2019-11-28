import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import { withRouter } from 'react-router-dom';
const Register = (props) => {
    const authContext = useContext(AuthContext);
    const { register, error, clearErr, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }
        if (error === 'User already exist!') document.getElementById("error").innerHTML = "המשתמש כבר קיים במערכת!";
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

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        if (!echeck(email) && email !=="") document.getElementById("email").innerHTML = "אנא הכנס אמייל תקין!";
        else if (!checkPassword(password) && password !=="") document.getElementById("password").innerHTML = "אנא הכנס סיסמא חזקה המורכבת מאות גדולה אות קטנה, מספרים ולפחות 6 תווים!";

    }

    const onSubmit = e => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') document.getElementById("error").innerHTML = "אנא הכנס פרטים!";
        else if (password !== password2) document.getElementById("error").innerHTML = "הסיסמה אינה תואמת";
        else register({ name, email, password })
    };

    const checkPassword = (password) => {
        // at least one number, one lowercase and one uppercase letter
        // at least six characters
        let passwordSpan = document.getElementById("password");
        let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        passwordSpan.innerHTML = "";
        debugger
        if (password !== "") {
            if (!re.test(password))
                passwordSpan.innerHTML = "אנא הכנס סיסמא חזקה המורכבת מאות גדולה אות קטנה, מספרים ולפחות 6 תווים!";

        }

        return re.test(password);
    }
    const echeck = (str) => {
        let at = "@";
        let dot = ".";
        let lat = str.indexOf(at);
        let lstr = str.length;
        let ldot = str.indexOf(dot);
        let emailElement = document.getElementById("email");
        if (email === '') return false
        if (str.indexOf(at) == -1 || str.indexOf(at) == -1 || str.indexOf(at) == 0 || str.indexOf(at) == lstr) {
            emailElement.innerHTML = "אנא הכנס אמייל תקין!";
            return false
        }
        if (str.indexOf(dot) == -1 || str.indexOf(dot) == 0 || str.indexOf(dot) == lstr || str.indexOf(dot, (lat + 2)) == -1) {
            emailElement.innerHTML = "אנא הכנס אמייל תקין!";
            return false
        }
        if (str.indexOf(at, (lat + 1)) != -1 || str.substring(lat - 1, lat) == dot || str.substring(lat + 1, lat + 2) == dot) {
            emailElement.innerHTML = "אנא הכנס אמייל תקין!";
            return false
        }
        if (str.indexOf(" ") != -1) {
            emailElement.innerHTML = "אנא הכנס אמייל תקין!";
            return false
        }
        emailElement.innerHTML = '';
        return true
    }
    return (
        <div className='formContainer'>
            <form onSubmit={onSubmit}>
                <h2>טופס הרשמה</h2>
                <div className="forminput">
                    <label htmlFor="name">שם:</label>
                    <input type="text" placeholder="שם" name='name' value={name} onChange={onChange}  />
                </div>
                <div className="forminput">
                    <label htmlFor="email">אימייל:</label>
                    <input type="text" placeholder="אימייל" name='email' value={email} onChange={onChange}  />
                    <span id="email"></span>
                </div>
                <div className="forminput">
                    <label htmlFor="password">סיסמה:</label>
                    <input type="password" placeholder="סיסמה" name='password' value={password} minLength='6' onChange={onChange}  />
                    <span id="password"></span>
                </div>
                <div className="forminput">
                    <label htmlFor="password2">אימות סיסמה:</label>
                    <input type="password" placeholder="אימות סיסמה" name='password2' value={password2} minLength='6' onChange={onChange}  />
                </div>
                <div className="formBtn">
                    <input type="submit" value="הירשם" />
                </div>
                <span id="error"></span>
            </form>
        </div>
    )
}

export default withRouter(Register);
