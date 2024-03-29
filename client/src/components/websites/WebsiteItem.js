import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
// import PropType from 'prop-Type'
import WebsiteContext from '../../context/website/WebsiteContext'
import DeleteAlert from '../layouts/alerts/DeleteAlert'
import { useSpring, animated } from 'react-spring'
import DelayWraper from '../wrapers/DelayWraper'
import ColorPick from '../layouts/timerPlusAndWeb/ColorPick'
const WebsiteItem = (props) => {
    const websiteContext = useContext(WebsiteContext);
    const { setCurrent } = websiteContext
    const { name, url, timeSchedule, color } = props.website;

    const [deleteFlag, setflag] = useState(false);
    const delayTime = props.index * 200;
    const fade = useSpring({
        to: { opacity: 1, backgroundColor: deleteFlag ? "rgb(157, 9, 9)" : "white", color: deleteFlag ? "white" : "black", boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' },
        config: { tension: 180, friction: 14 },
        delay: !deleteFlag ? `${delayTime}` : 0
    })

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date();
    const dayName = days[d.getDay()];
    const todaySchedule = timeSchedule[dayName]


    // const [flipped, set] = useState(false)
    // const { transform, opacity } = useSpring({
    //     opacity: flipped ? 1 : 0,
    //     transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    //     config: { mass: 5, tension: 500, friction: 80 }
    // })
    return (
        <DelayWraper index={props.index}>
            <animated.div className="websiteItem" id="websiteItem" style={{ backgroundColor: deleteFlag ? "rgb(157, 9, 9)" : "white" }}>
                <ColorPick color={color} />

                <Link to='/addwebsite' style={{ backgroundColor: 'transparent' }} onClick={() => setCurrent(props.website)}>

                    <div className="aw-website-details">
                        <p id="website-info"><i className="fa fa-angle-left" /> {name.charAt(0).toUpperCase() + name.slice(1)}</p>
                        <p id="formType">הסתרה</p>
                        <p><i className="fa fa-globe" />{url}</p>
                        <div className="todaySchedule">
                            <p id="todaySchedule-title">שעת הפעלה: {todaySchedule['openHour']} | שעת הפסקה: {todaySchedule['closeHour']}</p>
                        </div>
                        <button className="websiteBtn" id="editBtn" onClick={() => setCurrent(props.website)}>  ערוך </button>
                    </div>
                </Link>
                <button className="websiteBtn" id="deleteBtn" onClick={() => setflag(true)}>מחק</button>
                {deleteFlag ? <DeleteAlert item={props.website} setflag={setflag} deleteFlag={deleteFlag} /> : null}
            </animated.div >

            {/* <div onClick={() => set(state => !state)}>
                <div class="c" >
                    <div className="aw-website-details">
                        <p id="website-info"><i className="fa fa-angle-left" /> {name.charAt(0).toUpperCase() + name.slice(1)}</p>
                        <p id="formType">הסתרה</p>
                        <p><i className="fa fa-globe" />{url}</p>
                        <Link to='/addwebsite' className="editItem"> <button className="websiteBtn" id="editBtn" onClick={() => setCurrent(props.website)}>  ערוך </button></Link>
                        <div className="todaySchedule">
                            <p id="todaySchedule-title">שעות ההסתרה של היום</p>
                            <p>שעת הפעלה: {todaySchedule['openHour']}</p>
                            <p>שעת הפסקה: {todaySchedule['closeHour']}</p>
                        </div>
                    </div>
                </div>
                <a.div class="c" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                    <DeleteAlert item={props.website} setflag={setflag} deleteFlag={deleteFlag} />
                </a.div>
            </div> */}
        </DelayWraper>
    )
}

export default WebsiteItem
