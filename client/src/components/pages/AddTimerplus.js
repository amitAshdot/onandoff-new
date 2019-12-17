import React, { Fragment,useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext'
import TimerPlusContext from '../../context/timerPlus/TimerPlusContext'
import TimerPlusForm from '../timerPlus/TimerPlusForm'
import Home from "./Home"

const Timerplus = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext;

    const timerPlusContext = useContext(TimerPlusContext);
    const { currentTimerPlus } = timerPlusContext;
    
    useEffect(() => {
        authContext.loadUser();
    //eslint-disable-next-line
    }, [authContext]);

    const notLogin = (
        <Fragment>
            <div className="hp-main">
                <div className="hp-info">
                    <h2>מציגים למשתמש רק את מה שרלוונטי!</h2>
                    <p>
                        עם on and off תוכלו לנהל בפשטות ובקלות את השעות שבהם מוצגים כפתורים, מספרי טלפון וכל רכיב אחר שתבחרו
                    </p>
                    <Link to='/login'><button className="hp-button">התחבר</button></Link>
                    <p className="full-width">עוד אין לך חדשבון?!</p>
                    <Link to='/register'><button className="hp-button register" >הירשם</button></Link> 
                </div>
            </div>
        </Fragment>
    )
    return (
        <div>
            {isAuthenticated && currentTimerPlus ? <TimerPlusForm /> : isAuthenticated && !currentTimerPlus? <Home/> :  notLogin}
        </div>
    )
}
export default Timerplus
