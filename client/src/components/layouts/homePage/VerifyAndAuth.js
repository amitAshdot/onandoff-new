import React, { Fragment, useState, useContext } from 'react'
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import WebsiteContext from '../../../context/website/WebsiteContext'
import WebsiteItem from '../../websites/WebsiteItem'

import TimerPlusContext from '../../../context/timerPlus/TimerPlusContext'
import TimerPlusItem from '../../timerPlus/TimerPlusItem'
// import Loading from '../layouts/Loading'

export const VerifyAndAuth = () => {


    const websiteContext = useContext(WebsiteContext);
    const { websites,  setCurrent } = websiteContext;

    const timerPlusContext = useContext(TimerPlusContext);
    const { timersPlus,  setCurrentTimerPlus} = timerPlusContext;

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
    return (
        <Fragment>
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
}
export default VerifyAndAuth