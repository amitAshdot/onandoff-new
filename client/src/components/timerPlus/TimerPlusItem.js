import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import PropType from 'prop-Type'
import TimerPlusContext from '../../context/timerPlus/TimerPlusContext';
import { useSpring, animated } from 'react-spring'

import DeleteAlert from '../layouts/alerts/DeleteAlert'
import DelayWraper from '../wrapers/DelayWraper'
import ColorPick from '../layouts/timerPlusAndWeb/ColorPick';

const TimerPlusItem = (props) => {
    const timerPlusContext = useContext(TimerPlusContext);
    const { setCurrentTimerPlus } = timerPlusContext
    const { name, url, timeSchedule , color } = props.timerPlus;

    const [deleteFlag, setflag] = useState(false);
    // const delayTime = props.index * 200;
    // const fade = useSpring({
    //     // from:{opacity: 0 ,transform: 'translate(-50%,0,0)' },
    //     // to: { opacity:  1 , transform: 'translate(0%,0,0)' ,backgroundColor: deleteFlag? "red" : "white" , color: deleteFlag? "white" : "black"},
    //     to: { opacity: 1, backgroundColor: deleteFlag ? "rgb(157, 9, 9)" : "white", color: deleteFlag ? "white" : "black" },
    //     config: { tension: 180, friction: 14 },
    //     delay: !deleteFlag ? `${delayTime}` : 0
    // })

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date();
    const dayName = days[d.getDay()];
    const todaySchedule = timeSchedule[dayName]

    return (
        <DelayWraper index={props.index} style={{ display: 'inline' }}>
            <animated.div className="websiteItem" id="websiteItem" style={{backgroundColor: deleteFlag? "rgb(157, 9, 9)" : "white"}}>
                <ColorPick color={color} />
                <Link to='/addtimerplus' style={{backgroundColor: 'transparent'}} onClick={() => setCurrentTimerPlus(props.timerPlus)} >
                    <div className="aw-website-details">
                        <p id="website-info"><i className="fa fa-angle-left" /> {name.charAt(0).toUpperCase() + name.slice(1)}</p>
                        <p id="formType">טיימר+</p>
                        <p className="itemUrl" id="todaySchedule-title"><i className="fa fa-globe" />{url}</p>
                        <div className="todaySchedule">
                            <p id="todaySchedule-title">שעת הפעלה: {todaySchedule['openHour']} | שעת הפסקה: {todaySchedule['closeHour']}</p>
                        </div>
                        <button className="websiteBtn" id="editBtn" onClick={() => setCurrentTimerPlus(props.timerPlus)}>ערוך</button>
                        
                    </div>
                </Link>

                {/* <div className="aw-website-btn"> */}
                    <button className="websiteBtn" id="deleteBtn" onClick={() => setflag(true)}>מחק</button>
                {/* </div> */}
                {deleteFlag ? <DeleteAlert item={props.timerPlus} setflag={setflag} deleteFlag={deleteFlag} /> : null}
            </animated.div >

        </DelayWraper>
    )
}

export default TimerPlusItem
