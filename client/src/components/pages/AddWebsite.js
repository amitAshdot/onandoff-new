import React, { Fragment,useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext'
import WebsiteContext from '../../context/website/WebsiteContext'
import WebsiteForm from '../websites/WebsiteForm'
import Home from "./Home"

const AddWebsite = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext;

    const websiteContext = useContext(WebsiteContext);
    const { current } = websiteContext;
    useEffect(() => {
        authContext.loadUser();
    //eslint-disable-next-line
    }, [authContext]);

    const notLogin = (
        <Fragment>
            <div className="hp-main">
                <div className="hp-info">
                    <h2>מציגים למשתמש רק את מה שרלוונטי!</h2>
                    <p>
                        עם on and off תוכלו לנהל בפשטות ובקלות את השעות שבהם מוצגים כפתורים, מספרי טלפון וכל רכיב אחר שתבחרו
                    </p>
                    <Link to='/login'><button className="hp-button">התחבר</button></Link>
                    <p className="full-width">עוד אין לך חדשבון?!</p>
                    <Link to='/register'><button className="hp-button register" >הירשם</button></Link> 
                </div>
            </div>
        </Fragment>
    )
    return (
        <div>
            {isAuthenticated && current ? <WebsiteForm /> : isAuthenticated && !current? <Home/> :  notLogin}
        </div>
    )
}
export default AddWebsite
