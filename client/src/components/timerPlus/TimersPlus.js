import React, { Fragment, useContext, useEffect } from 'react'
import TimerPlusItem from './TimerPlusItem'
import TimerPlusContext from '../../context/timerPlus/timerPlusContext'
//import UserContext from '../../context/user/UserContext';

const TimersPlus = (props) => {
    const timerPlusContext = useContext(TimerPlusContext);
    const { timersPlus, getTimerPlus, loading } = timerPlusContext;

    useEffect(() => {
        getTimerPlus();
        //eslint-disable-next-line
    }, []);
    // let userWebs = websites.filter(website =>{return website.user.$oid === props.user._id.$oid})

    return (
        <Fragment>
            {timersPlus != null && !loading ?
                (timersPlus.map(timersPlus => <TimerPlusItem key={timersPlus._id} timersPlus={timersPlus} />))
                : 'loading...'}
        </Fragment>
    )
}

export default TimersPlus
