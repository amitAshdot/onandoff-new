import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
// import PropType from 'prop-Type'
import TimerPlusContext from '../../context/timerPlus/TimerPlusContext'

const TimerPlusItem = ({ timerPlus }) => {
    const timerPlusContext = useContext(TimerPlusContext);
    const { deleteTimerPlusContext, setCurrent, clearCurrent } = timerPlusContext
    const { name, url, } = timerPlus;

    const [deleteFlag, setflag] = useState(false);

    // const onDelete = (website) => {
    //     setCurrent(website);
    //     deleteFlag = true
    // }
    const takeDowm = (timerPlusContext) => {
        deleteTimerPlusContext(timerPlusContext, 'false');
        clearCurrent();
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
                <p><i className="fa fa-angle-left" /> {name.charAt(0).toUpperCase() + name.slice(1)}</p>
                <p><i className="fa fa-globe" />{url}</p>
                <Link to='/addtimerplus'> <button className="websiteBtn" id="editBtn" onClick={() => setCurrent(timerPlus)}>  ערוך </button></Link>
            </div>
            <div className="aw-website-btn">
                <button className="websiteBtn" id="deleteBtn" onClick={() => setflag(true)}>מחק</button>
                {deleteFlag ? showDelte : null}
            </div>
        </div>

    )
}

export default TimerPlusItem
