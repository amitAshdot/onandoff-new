import React, { Fragment, useState, useContext, useEffect } from 'react'
// import ReactDOM from 'react-dom';
import AuthContext from '../../context/auth/AuthContext'

const Verify = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, user, verify } = authContext;


    let parts = window.location.href.split('?');
    let lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    console.log(lastSegment);

    const onSubmit = e => {
        debugger
        if(user.vkey === lastSegment){
            e.preventDefault();
            verify(user);
        }
        console.log("user key: "+user.key+ "... last segment: " + lastSegment)
    };
    return (
        <div>
            <p>
                תודה שהצטרפת אלינו.
                אנא אשר את המייל כדי שתוכל להשתמש בטיימר
            </p>
            <form onSubmit={onSubmit}>
            <input type="submit" value="אשר מייל" />
            </form>
        </div >
    )

}

export default Verify
