import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = (props) => {
    const authContext = useContext(AuthContext);

    const { login, error,setError, isAuthenticated } = authContext;


    useEffect(() => {
        if (isAuthenticated)//check authContext
            props.history.push('/');
        if (error === 'wrong username or password') {

        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, props.history, setError])


    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const { email, password } = user;

    //change input state
    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        document.getElementById("email").style.borderColor = "#55a658";
        document.getElementById("password").style.borderColor = "#55a658";
    }

    const onSubmit = e => {
        e.preventDefault();
        if (email === "" || password === ""){
            document.getElementById("error").innerHTML = "אנא הכנס פרטים!"; 
            document.getElementById("email").style.borderColor = "red";
            document.getElementById("password").style.borderColor = "red";
        }
        
        else if (!echeck(email)){
            document.getElementById("error").innerHTML = "אנא הכנס מייל תקין!";
            document.getElementById("email").style.borderColor = "red";
        } 
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
        // let ldot = str.indexOf(dot)
        if (str.indexOf(at) === -1 || str.indexOf(at) === -1 || str.indexOf(at) === 0 || str.indexOf(at) === lstr) {
            return false
        }
        if (str.indexOf(dot) === -1 || str.indexOf(dot) === 0 || str.indexOf(dot) === lstr || str.indexOf(dot, (lat + 2)) === -1) {
            return false
        }
        if (str.indexOf(at, (lat + 1)) !== -1 || str.substring(lat - 1, lat) === dot || str.substring(lat + 1, lat + 2) === dot) {
            return false
        }
        if (str.indexOf(" ") !== -1) {
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
                    <input type="text" name='email' value={email} onChange={onChange} id="email"/>
                </div>
                <div className="forminput">
                    <label htmlFor="password">סיסמה:</label>
                    <input type="password"  name='password' value={password} onChange={onChange}id="password" />
                </div>
                <span>עוד אין לך חשבון?</span><Link to='/register'>הירשם</Link> 

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
