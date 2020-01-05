import React, { useContext } from 'react'
import { useSpring, animated } from 'react-spring'
import WebsiteContext from '../../context/website/WebsiteContext'
import TimerPlusContext from '../../context/timerPlus/TimerPlusContext';

const DeleteAlert = (props) => {
    const websiteContext = useContext(WebsiteContext);
    const { deleteWebsite, clearCurrent } = websiteContext

    const timerPlusContext = useContext(TimerPlusContext);
    const { deleteTimerPlus } = timerPlusContext

    const takeDowm = (website) => {
        props.item.wysiwyg === undefined ?
            deleteWebsite(website)
            : deleteTimerPlus(website);

        clearCurrent();
    }
    const name = props.item.name
    const fadeIn = useSpring({ opacity: props.deleteFlag ? 1 : 0, left:props.deleteFlag? 0:-9999 })
    return (
        <animated.div className="deleteForm" style={fadeIn}>
            <p>האם את/ה בטוח שהינך רוצה למחוק את {name}?</p>
            <button className="deletebto" onClick={() => takeDowm(props.item)}>מחק</button>
            <button className="rejrect" onClick={() => props.setflag(false)}>בטל</button>
        </animated.div>
    )
}
export default DeleteAlert
