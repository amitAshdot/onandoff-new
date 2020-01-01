import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
// import PropType from 'prop-Type'
import WebsiteContext from '../../context/website/WebsiteContext'

const WebsiteItem = ({ website }) => {
    const websiteContext = useContext(WebsiteContext);
    const { deleteWebsite, setCurrent, clearCurrent } = websiteContext
    const { name, url, } = website;

    const [deleteFlag, setflag] = useState(false);

    const takeDowm = (website) => {
        deleteWebsite(website);
        clearCurrent();
    }
    const showDelte = (
        <Fragment>
            <div className="deleteForm">
                <p>האם את/ה בטוח?</p>
                <button className="deletebto" onClick={() => takeDowm(website)}>מחק</button>
                <button className="rejrect" onClick={() => setflag(false)}>בטל</button>
            </div>
        </Fragment>
    )
    return (
        <div className="websiteItem" id="websiteItem">
            <div className="aw-website-details">
                <p id="website-info"><i className="fa fa-angle-left" /> {name.charAt(0).toUpperCase() + name.slice(1)}</p>
                <p id="formType">הסתרה</p>
                <p><i className="fa fa-globe" />{url}</p>
                <Link to='/addwebsite' className="editItem"> <button className="websiteBtn" id="editBtn" onClick={() => setCurrent(website)}>  ערוך </button></Link>
            </div>
            <div className="aw-website-btn">
                <button className="websiteBtn" id="deleteBtn" onClick={() => setflag(true)}>מחק</button>
                {deleteFlag ? showDelte : null}
            </div>

        </div>

    )
}

export default WebsiteItem
