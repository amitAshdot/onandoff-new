import React, { Fragment, useContext, useEffect } from 'react'
import WebsiteItem from './WebsiteItem'
import WebsiteContext from '../../context/website/WebsiteContext'
//import UserContext from '../../context/user/UserContext';

const Websites = () => {
    const websiteContext = useContext(WebsiteContext);
    const { websites, getWebsites, loading } = websiteContext;

    useEffect(() => {
        getWebsites();
        //eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            {websites != null && !loading ?
                (websites.map(website => <WebsiteItem key={website._id} website={website} />))
                : 'loading...'}
        </Fragment>
    )
}

export default Websites
