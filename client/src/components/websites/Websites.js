import React, { Fragment, useContext, useEffect } from 'react'
import WebsiteItem from './WebsiteItem'
import WebsiteContext from '../../context/website/WebsiteContext'
//import UserContext from '../../context/user/UserContext';

const Websites = (props) => {
    const websiteContext = useContext(WebsiteContext);
    const { websites , getWebsites, loading} = websiteContext;

    useEffect(()=>{
        getWebsites();
        //eslint-disable-next-line
    }, []);
    // let userWebs = websites.filter(website =>{return website.user.$oid === props.user._id.$oid})

    return (
        <Fragment>
            {websites != null && !loading ? (
                websites.map(website => <WebsiteItem key={website._id} website={website} />) 
                )
                : 'loading...'}

                
        </Fragment>
    )
}

export default Websites
