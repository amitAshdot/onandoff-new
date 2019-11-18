import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
// import PropType from 'prop-Type'
import WebsiteContext from '../../context/website/WebsiteContext'

const WebsiteItem = ({ website }) => {
    const websiteContext = useContext(WebsiteContext);
    const { deleteWebsite, setCurrent, clearCurrent } = websiteContext
    const {  name, url, divId, user, timeSchedule} = website;

    const onDelete = (website) => {
        deleteWebsite(website, 'false');
        clearCurrent();
    }
    return (
        <div className="websiteItem">

            {name.charAt(0).toUpperCase() + name.slice(1)} {'|'} <span>{url}</span>
            <button className="websiteBtn" onClick={() => setCurrent(website)}> <Link to='/addwebsite'> ערוך</Link> </button>
            <button className="websiteBtn" onClick={() => onDelete(website)}>מחק</button>

        </div>

    )
}

export default WebsiteItem
