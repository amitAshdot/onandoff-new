import React, { Fragment, useContext } from 'react'
import WebsiteItem from './WebsiteItem'
import WebsiteContext from '../../context/website/WebsiteContext'
//import UserContext from '../../context/user/UserContext';
const Websites = (props) => {
    const websiteContext = useContext(WebsiteContext);
    const { websites, loading } = websiteContext;
    let searchName = props.searchName.toLowerCase();
    let filterList = websites.filter(item => {
        return ((item.name.toLowerCase().search(searchName) !== -1 || item.url.toLowerCase().search(searchName) !== -1)
            && item.isShow === "true")
    }); return (
        <Fragment>
            {websites != null && !loading ?
                (filterList.map((website, index) => <WebsiteItem key={website._id} website={website} index={index} />))
                : 'loading...'}
        </Fragment>
    )
}
export default Websites
