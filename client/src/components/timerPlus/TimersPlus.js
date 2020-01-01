import React, { Fragment, useContext, useEffect } from 'react'
import TimerPlusItem from './TimerPlusItem'
import TimerPlusContext from '../../context/timerPlus/timerPlusContext'
//import UserContext from '../../context/user/UserContext';

const TimersPlus = () => {
    const timerPlusContext = useContext(TimerPlusContext);
    const { timersPlus, getTimerPlus, loading } = timerPlusContext;

    useEffect(() => {
        getTimerPlus();
        //eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            {timersPlus != null && !loading ?
                (timersPlus.map(timersPlus => <TimerPlusItem key={timersPlus._id} timersPlus={timersPlus} />))
                : 'loading...'}
        </Fragment>
        
    )
}

export default TimersPlus
