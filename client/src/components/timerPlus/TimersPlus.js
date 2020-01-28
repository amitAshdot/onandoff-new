import React, { Fragment, useContext } from 'react'
import TimerPlusItem from './TimerPlusItem'
import TimerPlusContext from '../../context/timerPlus/TimerPlusContext'
//import UserContext from '../../context/user/UserContext';
const TimersPlus = (props) => {
    const timerPlusContext = useContext(TimerPlusContext);
    const { timersPlus, loading } = timerPlusContext;

    let searchName = props.searchName
    let filterList = timersPlus.filter(item => {
        return ((item.name.toLowerCase().search(searchName) !== -1 || item.url.toLowerCase().search(searchName) !== -1)
            && item.isShow === "true")
    });
    return (
        <Fragment>
            {timersPlus != null && !loading ?
                (filterList.map((timerPlus, index) => <TimerPlusItem key={timerPlus._id} timerPlus={timerPlus} index={index} />))
                : 'loading...'}
        </Fragment>
    )
}

export default TimersPlus
