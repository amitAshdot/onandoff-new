import React, { useContext } from 'react'
import AuthContext from '../../context/auth/AuthContext'
import WebsiteContext from '../../context/website/WebsiteContext'
import WebsiteForm from '../websites/WebsiteForm'
import Home from "./Home"
import {useSpring, animated} from 'react-spring'
import NotLogin from '../layouts/homePage/NotLogin'

const AddWebsite = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext;

    const websiteContext = useContext(WebsiteContext);
    const { current } = websiteContext;

    const fadeIn =useSpring({from:{opacity:0},to:{opacity:1}})

    return (
        <animated.div style={fadeIn}>
            {isAuthenticated && current ? <WebsiteForm /> : isAuthenticated && !current? <Home/> :  <NotLogin/>}
        </animated.div>
    )
}
export default AddWebsite
