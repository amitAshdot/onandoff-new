import React, { Fragment, useState, useEffect, useContext } from 'react'
// import ReactDOM from 'react-dom';
import AuthContext from '../../context/auth/AuthContext'
import { Link } from 'react-router-dom';
import Home from './Home';

const Verify = () => {
    const authContext = useContext(AuthContext);
    const { verify, isVerified } = authContext;

    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, []);
    const [pressed, setPressed] = useState({
        pressed: false
    });

    let parts = window.location.href.split('?');
    let lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash

    const onSubmit = () => {
        debugger
        // if (user.vkey === lastSegment) {
            verify(lastSegment);
            let statusCopy = Object.assign({}, pressed);
            statusCopy.pressed = true;
            setPressed(statusCopy);
        // }
    };
    useEffect(() => {
        debugger
        if(!isVerified)
            onSubmit();
         //eslint-disable-next-line
      }, [])
    
    // const beforePress = (
    //     <div>
    //         <p>  תודה שהצטרפת אלינו.</p>
    //         לא תוכל להשתמש בטיימרים שלנו לפני שתאשר את המייל
    //     </div>
    // )
    const afterPress = (
        <div>
            <p>תודה, אפשר לעבור לדף הראשי</p>
            <Link to="/"><button>מעבר לדף הבית</button></Link>
        </div>
    )
    const notlogin = (
        <Fragment>
            <p id="verify-time">התוקף של המייל נגמר, אנא התחבר כדי לקבל מייל חדש</p>
            <Home />
        </Fragment>
    )
    return (
        <div>
            {isVerified ? afterPress : notlogin}
            {/* {afterPress} */}
        </div >
    )

}

export default Verify
