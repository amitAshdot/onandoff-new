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
    const { timersPlus, getTimersPlus, setCurrentTimerPlus, clearCurrentTimerPlus, currentTimerPlus } = timerPlusContext;
    //user effect for edit form , current is the corrent landingPage
    useEffect(() => {
        if (current != null) {
            clearCurrent();
        }
        //if current is empty, set the inputs (state) back to default
        else {
            setWebsite({
                timeSchedule: {
                    Sunday: { openHour: '', closeHour: '' },
                    Monday: { openHour: '', closeHour: '' },
                    Tuesday: { openHour: '', closeHour: '' },
                    Wednesday: { openHour: '', closeHour: '' },
                    Thursday: { openHour: '', closeHour: '' },
                    Friday: { openHour: '', closeHour: '' },
                    Saturday: { openHour: '', closeHour: '' }
                },
                name: '',
                url: '',
                divId: '',

            })
        }
    }, [websiteContext, current, clearCurrent]);
    const [website, setWebsite] = useState({
        timeSchedule: {
            Sunday: { openHour: '', closeHour: '' },
            Monday: { openHour: '', closeHour: '', },
            Tuesday: { openHour: '', closeHour: '' },
            Wednesday: { openHour: '', closeHour: '' },
            Thursday: { openHour: '', closeHour: '' },
            Friday: { openHour: '', closeHour: '' },
            Saturday: { openHour: '', closeHour: '' }
        },
        name: '',
        url: '',
        divId: '',
    });
    const [timerPlus, setTimersPlus] = useState({
        context: '',
        name: '',
        url: '',
        divId: '',
    });

    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, []);
    useEffect(() => {
        getWebsites();
        //eslint-disable-next-line
    }, []);
    useEffect(() => {
        getTimersPlus();
        //eslint-disable-next-line
    }, []);

    let websiteList = (websites.map(website => {
        if (website.isShow === 'true') return <WebsiteItem key={website._id} website={website} />
        return null;
    })
    );
    let timersPlusList = (timersPlus.map(timerPlus => {
        if (timersPlus.isShow === 'true') return <TimerPlusItem key={timersPlus._id} timersPlus={timersPlus} />
        return null;
    })
    );
    // ReactDOM.render(websiteList, document.getElementById('root'));

    const onSubmit = e => {
        e.preventDefault();
        setCurrent();
    }
    // const onChange = e => { setWebsite({ ...website, [e.target.name]: e.target.value }); }
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
    debugger
    const verifyAndAuth = (
        <Fragment>
            <h1>שלום {user && user.name}</h1>
            <div className="createWeb">
                <form onSubmit={onSubmit}>
                    <p>כאן תוכל להוסיף ולנהל את כל הטיימרים שלך</p>
                    <Link to="/addwebsite"><input type="submit" value="הוסף" onClick={() => setCurrent(website)} /></Link>
                    {/* <Link to="/addtimerplus"><input type="submit" id="addTimerPlus" value="הוסף טיימר+" onClick={() => setCurrentTimerPlus(timerPlus)} /></Link> */}
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
