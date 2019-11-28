import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
// import PropType from 'prop-Type'
import WebsiteContext from '../../context/website/WebsiteContext'

const WebsiteItem = ({ website }) => {
    const websiteContext = useContext(WebsiteContext);
    const { deleteWebsite, setCurrent, clearCurrent } = websiteContext
    const { name, url, divId, user, timeSchedule } = website;

    const onDelete = (website) => {
        deleteWebsite(website, 'false');
        clearCurrent();
    }
    return (
        <div className="websiteItem">
            <div className="aw-website-details">
                {name.charAt(0).toUpperCase() + name.slice(1)} {'|'} <span>{url}</span>
            </div>
            <div className="aw-website-btn">
                <Link to='/addwebsite'> <button className="websiteBtn" onClick={() => setCurrent(website)}>  ערוך </button></Link>
                <button className="websiteBtn" onClick={() => onDelete(website)}>מחק</button>
            </div>
        </div>

    )
}

export default WebsiteItem
