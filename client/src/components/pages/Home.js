import React, { useContext, useEffect } from 'react'
// import ReactDOM from 'react-dom';
import AuthContext from '../../context/auth/AuthContext'
import WebsiteContext from '../../context/website/WebsiteContext'

import TimerPlusContext from '../../context/timerPlus/TimerPlusContext'

import VerifyAndAuth from '../layouts/homePage/VerifyAndAuth'
import NotVerify from '../layouts/homePage/NotVerify'
import NotLogin from '../layouts/homePage/NotLogin'

// import PageWraper from '../wrapers/PageWraper'

const Home = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, user, isVerified, loading } = authContext;

    const websiteContext = useContext(WebsiteContext);
    const { getWebsites, clearCurrent, current } = websiteContext;

    const timerPlusContext = useContext(TimerPlusContext);
    const { getTimersPlus, currentTimerPlus, clearCurrentTimerPlus } = timerPlusContext;

    //user effect for edit form , current is the corrent landingPage
    useEffect(() => {

        if (current != null) clearCurrent();
        if (currentTimerPlus != null) clearCurrentTimerPlus();
        authContext.loadUser();
        getWebsites();
        getTimersPlus();
        //eslint-disable-next-line
    }, []);
return (
        // <PageWraper>
            <div >
                {
                    !loading ?
                        isAuthenticated && isVerified ? <VerifyAndAuth />
                            : (user && !user.isVerified) ? <NotVerify /> : <NotLogin />
                        : 'loading...'
                }
            </div >
        // </PageWraper>

    )
}
export default Home
