import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import { withRouter } from 'react-router-dom';

const Login = (props) => {
    const authContext = useContext(AuthContext);

    const { login, error, clearErr, isAuthenticated } = authContext;


    useEffect(() => {
        if (isAuthenticated)//check authContext
            props.history.push('/');
        if (error === 'wrong username or password') {

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
        debugger
        if (email === "" || password === "") document.getElementById("error").innerHTML = "אנא הכנס פרטים!"; 
        else if (!echeck(email)) document.getElementById("error").innerHTML = "אנא הכנס מייל תקין!";
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
                <span id="error">

                </span>
            </form>
        </div>
    )
}

export default withRouter(Login);
