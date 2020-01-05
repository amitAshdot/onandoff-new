import React, { useContext } from 'react'
import AuthContext from '../../context/auth/AuthContext'
import WebsiteContext from '../../context/website/WebsiteContext'
import WebsiteForm from '../websites/WebsiteForm'
import Home from "./Home"
import NotLogin from '../layouts/homePage/NotLogin'
// import PageWraper from '../wrapers/PageWraper'

const AddWebsite = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext;

    const websiteContext = useContext(WebsiteContext);
    const { current } = websiteContext;


    return (
        // <PageWraper>
            <div >
                {isAuthenticated && current ? <WebsiteForm /> : isAuthenticated && !current ? <Home /> : <NotLogin />}
            </div>
        // </PageWraper>
    )
}
export default AddWebsite
