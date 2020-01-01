import React, { useContext } from 'react'
import AuthContext from '../../context/auth/AuthContext'
import TimerPlusContext from '../../context/timerPlus/TimerPlusContext'
import TimerPlusForm from '../timerPlus/TimerPlusForm'
import Home from "./Home"
import {useSpring, animated} from 'react-spring'
import NotLogin from '../layouts/homePage/NotLogin'

const Timerplus = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext;

    const timerPlusContext = useContext(TimerPlusContext);
    const { currentTimerPlus } = timerPlusContext;
    
    const fadeIn =useSpring({from:{opacity:0},to:{opacity:1}})


    return (
        <animated.div style={fadeIn}>
            {isAuthenticated && currentTimerPlus ? <TimerPlusForm /> : isAuthenticated && !currentTimerPlus? <Home/> :  <NotLogin/>}
        </animated.div>
    )
}
export default Timerplus
