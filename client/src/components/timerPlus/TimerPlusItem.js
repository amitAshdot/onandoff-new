import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import PropType from 'prop-Type'
import TimerPlusContext from '../../context/timerPlus/TimerPlusContext';

const TimerPlusItem = ({ timerPlus }) => {
    const timerPlusContext = useContext(TimerPlusContext);
    const { deleteTimerPlus, setCurrentTimerPlus, clearTimerPlus } = timerPlusContext
    const { name, url, } = timerPlus;

    const [deleteFlag, setflag] = useState(false);

    const takeDowm = (timerPlus) => {
        deleteTimerPlus(timerPlus, 'false');
        clearTimerPlus();
    }
    const showDelte = (
        <Fragment>
            <div className="deleteForm">
                <p>האם את/ה בטוח?</p>
                <button className="deletebto" onClick={() => takeDowm(timerPlus)}>מחק</button>
                <button className="rejrect" onClick={() => setflag(false)}>בטל</button>
            </div>
        </Fragment>
    )
    return (
        <div className="websiteItem" id="websiteItem">
            <div className="aw-website-details">
                <p id="website-info"><i className="fa fa-angle-left" /> {name.charAt(0).toUpperCase() + name.slice(1)}</p>
                <p id="formType">טיימר+</p>
                <p><i className="fa fa-globe" />{url}</p>
                <Link to='/addtimerplus'> <button className="websiteBtn" id="editBtn" onClick={() => setCurrentTimerPlus(timerPlus)}>ערוך</button></Link>
            </div>
            <div className="aw-website-btn">
                <button className="websiteBtn" id="deleteBtn" onClick={() => setflag(true)}>מחק</button>
                {deleteFlag ? showDelte : null}
            </div>
        </div>

    )
}

export default TimerPlusItem
