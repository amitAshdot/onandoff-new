import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
// import PropType from 'prop-Type'
import WebsiteContext from '../../context/website/WebsiteContext'
import {useSpring, animated} from 'react-spring'
import DeleteAlert from '../layouts/DeleteAlert'

const WebsiteItem = ({ website }) => {
    const websiteContext = useContext(WebsiteContext);
    const { setCurrent } = websiteContext
    const { name, url} = website;

    const [deleteFlag, setflag] = useState(false);

    const fadeIn =useSpring({from:{opacity:0},to:{opacity:1}})
    // const fadeOut =useSpring({from:{opacity:1},to:{opacity:0}})
    return (
        <animated.div className="websiteItem" id="websiteItem" style={fadeIn}>
            <div className="aw-website-details">
                <p id="website-info"><i className="fa fa-angle-left" /> {name.charAt(0).toUpperCase() + name.slice(1)}</p>
                <p id="formType">הסתרה</p>
                <p><i className="fa fa-globe" />{url}</p>
                <Link to='/addwebsite' className="editItem"> <button className="websiteBtn" id="editBtn" onClick={() => setCurrent(website)}>  ערוך </button></Link>
            </div>
            <div className="aw-website-btn">
                <button className="websiteBtn" id="deleteBtn" onClick={() => setflag(true)}>מחק</button>
                {deleteFlag?<DeleteAlert item={website} setflag={setflag} deleteFlag={deleteFlag} /> : null}
            </div>

        </animated.div>

    )
}

export default WebsiteItem
