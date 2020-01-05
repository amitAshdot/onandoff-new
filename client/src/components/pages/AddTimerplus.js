import React, { useContext } from 'react'
import AuthContext from '../../context/auth/AuthContext'
import TimerPlusContext from '../../context/timerPlus/TimerPlusContext'
import TimerPlusForm from '../timerPlus/TimerPlusForm'
import Home from "./Home"
import NotLogin from '../layouts/homePage/NotLogin'
// import PageWraper from '../wrapers/PageWraper'

const Timerplus = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext;

    const timerPlusContext = useContext(TimerPlusContext);
    const { currentTimerPlus } = timerPlusContext;



    return (
        // <PageWraper>
            <div>
                {isAuthenticated && currentTimerPlus ? <TimerPlusForm /> : isAuthenticated && !currentTimerPlus ? <Home /> : <NotLogin />}
            </div>
        // </PageWraper>
    )
}
export default Timerplus
