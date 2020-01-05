import React, { Fragment, useContext, useEffect } from 'react'
import TimerPlusItem from './TimerPlusItem'
import TimerPlusContext from '../../context/timerPlus/TimerPlusContext'
//import UserContext from '../../context/user/UserContext';

const TimersPlus = () => {
    const timerPlusContext = useContext(TimerPlusContext);
    const { timersPlus, loading } = timerPlusContext;

    return (
        <Fragment>
            {timersPlus != null && !loading ?
                (timersPlus.map((timerPlus, index) => timerPlus.isShow === "true" ?
                    <TimerPlusItem key={timerPlus._id} timerPlus={timerPlus} index={index} />
                    : null))
                : 'loading...'}
        </Fragment>

    )
}

export default TimersPlus
