import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';
// import PropType from 'prop-Type'
import WebsiteContext from '../../context/website/WebsiteContext'

const WebsiteItem = ({ website }) => {
    const websiteContext = useContext(WebsiteContext);
    const { deleteWebsite, setCurrent, clearCurrent, deleteBtn, deleteFlag } = websiteContext
    const { name, url, divId, user, timeSchedule } = website;

    const onDelete = (website) => {
        deleteBtn(website);
    }
    const takeDowm = (website) => {
        deleteWebsite(website, 'false');
        clearCurrent();
    }
    const showDelte = (
        <Fragment>
            <div className="deleteForm">
                <p>האם בטוח?</p>
                {/* <button className="deletebto" onClick={() => takeDowm(website)}>מחק</button> */}
                <button className="rejrect" onClick={() => deleteFlag = false}>בטל</button>

            </div>
        </Fragment>
    )
    return (
        <div className="websiteItem">
            <div className="aw-website-details">
                <p><i class="fa fa-angle-left" /> {name.charAt(0).toUpperCase() + name.slice(1)}</p>
                <p><i class="fa fa-globe" />{url}</p>
                <Link to='/addwebsite'> <button className="websiteBtn" onClick={() => setCurrent(website)}>  ערוך </button></Link>
            </div>
            <div className="aw-website-btn">
                <button className="websiteBtn" onClick={() => onDelete(website)}>מחק</button>
                {deleteFlag? showDelte : null}
            </div>
        </div>

    )
}

export default WebsiteItem
