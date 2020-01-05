import React, { Fragment, useContext } from 'react'
import WebsiteItem from './WebsiteItem'
import WebsiteContext from '../../context/website/WebsiteContext'
//import UserContext from '../../context/user/UserContext';
const Websites = () => {
    const websiteContext = useContext(WebsiteContext);
    const { websites, getWebsites, loading } = websiteContext;

    return (
        <Fragment>
            {websites != null && !loading ?

                (websites.map((website, index) => website.isShow === "true" ?
                    <WebsiteItem key={website._id} website={website} index={index} />
                    : null))
                : 'loading...'}
        </Fragment>
    )
}

export default Websites
