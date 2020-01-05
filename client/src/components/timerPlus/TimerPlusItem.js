import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import PropType from 'prop-Type'
import TimerPlusContext from '../../context/timerPlus/TimerPlusContext';
import { useSpring, animated } from 'react-spring'

import DeleteAlert from '../layouts/DeleteAlert'
import DelayWraper from '../wrapers/DelayWraper'

const TimerPlusItem = (props) => {
    const timerPlusContext = useContext(TimerPlusContext);
    const { setCurrentTimerPlus } = timerPlusContext
    const { name, url, timeSchedule} = props.timerPlus;

    const [deleteFlag, setflag] = useState(false);
    const delayTime = props.index * 200;
    const fade = useSpring({
        // from:{opacity: 0 ,transform: 'translate(-50%,0,0)' },
        // to: { opacity:  1 , transform: 'translate(0%,0,0)' ,backgroundColor: deleteFlag? "red" : "white" , color: deleteFlag? "white" : "black"},
        to: { opacity: 1, backgroundColor: deleteFlag ? "rgb(157, 9, 9)" : "white", color: deleteFlag ? "white" : "black" },
        config: { tension: 180, friction: 14 },
        delay: !deleteFlag ? `${delayTime}` : 0
    })

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date();
    const dayName = days[d.getDay()];
    const todaySchedule = timeSchedule[dayName]

    return (
        <DelayWraper index={props.index}>
            <animated.div className="websiteItem" id="websiteItem" style={fade}>
                <div className="aw-website-details">
                    <p id="website-info"><i className="fa fa-angle-left" /> {name.charAt(0).toUpperCase() + name.slice(1)}</p>
                    <p id="formType">טיימר+</p>
                    <p><i className="fa fa-globe" />{url}</p>
                    <Link to='/addtimerplus' className="editItem"> <button className="websiteBtn" id="editBtn" onClick={() => setCurrentTimerPlus(props.timerPlus)}>ערוך</button></Link>
                    <div className="todaySchedule">
                    <p id="todaySchedule-title">שעות ההחלפה של היום</p>
                    <p>שעת הפעלה: {todaySchedule['openHour']}</p>
                    <p>שעת הפסקה: {todaySchedule['closeHour']}</p>
                </div>
                </div>

                <div className="aw-website-btn">
                    <button className="websiteBtn" id="deleteBtn" onClick={() => setflag(true)}>מחק</button>
                </div>
            </animated.div >
            {deleteFlag ? <DeleteAlert item={props.timerPlus} setflag={setflag} deleteFlag={deleteFlag} /> : null}
        </DelayWraper>
    )
}

export default TimerPlusItem
