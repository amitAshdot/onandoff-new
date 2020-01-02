import React, { useContext } from 'react'
import { useSpring, animated } from 'react-spring'
import WebsiteContext from '../../context/website/WebsiteContext'
import TimerPlusContext from '../../context/timerPlus/TimerPlusContext';

const DeleteAlert = (props) => {
    const websiteContext = useContext(WebsiteContext);
    const { deleteWebsite, clearCurrent } = websiteContext

    const timerPlusContext = useContext(TimerPlusContext);
    const { deleteTimerPlus, setCurrentTimerPlus, clearTimerPlus } = timerPlusContext

    const takeDowm = (website) => {
        props.item.wysiwyg === undefined ?
            deleteWebsite(website)
            : deleteTimerPlus(website);

        clearCurrent();
    }
    const fadeIn = useSpring({ opacity: props.deleteFlag ? 1 : 0, left:props.deleteFlag? 0:-9999 })
    // const fadeOut =useSpring({from:{opacity:0},to:{opacity:1}})
    return (
        <animated.div className="deleteForm" style={fadeIn}>
            <p>האם את/ה בטוח?</p>
            <button className="deletebto" onClick={() => takeDowm(props.item)}>מחק</button>
            <button className="rejrect" onClick={() => props.setflag(false)}>בטל</button>
        </animated.div>
    )
}
export default DeleteAlert
