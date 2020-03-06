import React, { Fragment } from 'react';
import homepageImage from '../../../images/hp-main-img.jpeg';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

 const NotLogin = () => {

    var sectionStyle = {

        backgroundImage: `url(${homepageImage})`,
        height: '91vh',
        width: '105vw',
        marginRight: '-5vw',
        objectFill: 'fill',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
    };
      
    return (
        <Fragment>
            <div className="hp-main" style={ sectionStyle }>
                <div className="hp-info" >
                    <h2>מציגים למשתמש רק את מה שרלוונטי!</h2>
                    <p>
                        עם on and off תוכלו לנהל בפשטות ובקלות את השעות בהם מוצגים כפתורים, מספרי טלפון וכל רכיב אחר שתבחרו
                    </p>
                    <Link to='/login'><button className="hp-button">התחבר</button></Link>
                    <p className="full-width">עוד אין לך חשבון?!</p>
                    <Link to='/register'><button className="hp-button register" >הירשם</button></Link>
                </div>
            </div>
        </Fragment>
    )
}
export default NotLogin