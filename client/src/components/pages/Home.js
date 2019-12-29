import React, { Fragment, useState, useContext, useEffect } from 'react'
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext'
import WebsiteContext from '../../context/website/WebsiteContext'
import WebsiteItem from '../websites/WebsiteItem'

import TimerPlusContext from '../../context/timerPlus/TimerPlusContext'
import TimerPlusItem from '../timerPlus/TimerPlusItem'
// import Loading from '../layouts/Loading'
import SendEmail from '../../action/sendMail'

const Home = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, user, isVerified } = authContext;

    const websiteContext = useContext(WebsiteContext);
    const { websites, getWebsites, setCurrent, clearCurrent, current } = websiteContext;

    const timerPlusContext = useContext(TimerPlusContext);
    const { timersPlus, getTimersPlus, setCurrentTimerPlus, currentTimerPlus, clearCurrentTimerPlus} = timerPlusContext;
  
    //user effect for edit form , current is the corrent landingPage
    useEffect(() => {
        if (current != null) clearCurrent(); 
        if(currentTimerPlus != null) clearCurrentTimerPlus(); 
        authContext.loadUser();
        getWebsites();
        getTimersPlus();
     //eslint-disable-next-line
    }, []);
    const [website, setWebsite] = useState({
        timeSchedule: {
            Sunday: { openHour: '00:00', closeHour: '00:00' },
            Monday: { openHour: '00:00', closeHour: '00:00', },
            Tuesday: { openHour: '00:00', closeHour: '00:00' },
            Wednesday: { openHour: '00:00', closeHour: '00:00' },
            Thursday: { openHour: '00:00', closeHour: '00:00' },
            Friday: { openHour: '00:00', closeHour: '00:00' },
            Saturday: { openHour: '00:00', closeHour: '00:00' }
        },
        name: '',
        url: '',
        divId: '',
    });
    const [timerPlus, setTimersPlus] = useState({
        wysiwyg: '',
        timeSchedule: {
            Sunday: { openHour: '00:00', closeHour: '00:00' },
            Monday: { openHour: '00:00', closeHour: '00:00', },
            Tuesday: { openHour: '00:00', closeHour: '00:00' },
            Wednesday: { openHour: '00:00', closeHour: '00:00' },
            Thursday: { openHour: '00:00', closeHour: '00:00' },
            Friday: { openHour: '00:00', closeHour: '00:00' },
            Saturday: { openHour: '00:00', closeHour: '00:00' }
        },
        name: '',
        url: '',
        divId: '',
    });
    let websiteList = (websites.map(website => {
        if (website.isShow === 'true') return <WebsiteItem key={website._id} website={website} />
        return null;
    })
    );
    let timersPlusList = (timersPlus.map(timerPlus => {
        if (timerPlus.isShow === 'true') return <TimerPlusItem key={timerPlus._id} timerPlus={timerPlus} />
        return null;
    })
    );
    
    const onSubmit = e => {
        e.preventDefault();
        setCurrent();
    }
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
    const notVerify = (
        <Fragment>
            <div className="hp-main">
                <div className="hp-info">
                    <h1>שלום {user && user.name}</h1>
                    <h2>אשר את המייל כדי להמשיך</h2>
                </div>
            </div>
            <SendEmail user={user} />
        </Fragment>
    )
    const verifyAndAuth = (
        <Fragment>
            <h1>שלום {user && user.name}</h1>
            <div className="createWeb">
                <form onSubmit={onSubmit}>
                    <p>כאן תוכל להוסיף ולנהל את כל הטיימרים שלך</p>
                    <Link to="/addwebsite"><input type="submit" value="הוסף" onClick={() => setCurrent(website)} /></Link>
                    <Link to="/addtimerplus"><input type="submit" id="addTimerPlus" value="הוסף טיימר+" onClick={() => setCurrentTimerPlus(timerPlus)} /></Link>
                </form>
            </div>
            <div className="websites" id="personal">
                {websiteList}
                {timersPlusList}
            </div>
        </Fragment>
    )
    return (
        <div>
            {isAuthenticated && isVerified ? verifyAndAuth : (user && !user.isVerified) ? notVerify : isVerified ? verifyAndAuth : notLogin}
        </div >
    )
}
export default Home
