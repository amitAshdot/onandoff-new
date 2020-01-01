import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import PropType from 'prop-Type'
import TimerPlusContext from '../../context/timerPlus/TimerPlusContext';
import {useSpring, animated} from 'react-spring'
import DeleteAlert from '../layouts/DeleteAlert'

const TimerPlusItem = ({ timerPlus }) => {
    const timerPlusContext = useContext(TimerPlusContext);
    const {  setCurrentTimerPlus } = timerPlusContext
    const { name, url, } = timerPlus;

    const [deleteFlag, setflag] = useState(false);
    const fadeIn =useSpring({from:{opacity:0},to:{opacity:1}})

    return (
        <animated.div className="websiteItem" id="websiteItem" style={fadeIn}>
            <div className="aw-website-details">
                <p id="website-info"><i className="fa fa-angle-left" /> {name.charAt(0).toUpperCase() + name.slice(1)}</p>
                <p id="formType">טיימר+</p>
                <p><i className="fa fa-globe" />{url}</p>
                <Link to='/addtimerplus' className="editItem"> <button className="websiteBtn" id="editBtn" onClick={() => setCurrentTimerPlus(timerPlus)}>ערוך</button></Link>
            </div>
            <div className="aw-website-btn">
                <button className="websiteBtn" id="deleteBtn" onClick={() => setflag(true)}>מחק</button>
                <DeleteAlert item={timerPlus} setflag={setflag} deleteFlag={deleteFlag}/> 
            </div>
        </animated.div>

    )
}

export default TimerPlusItem
