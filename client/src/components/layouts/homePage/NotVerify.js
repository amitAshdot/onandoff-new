import React, { Fragment, useContext } from 'react'
// import ReactDOM from 'react-dom';
import AuthContext from '../../../context/auth/AuthContext'

// import Loading from '../layouts/Loading'
import SendEmail from '../../../action/sendMail'
 const NotVerify = () => {
    const authContext = useContext(AuthContext);
    const { user} = authContext;
    return (
        <Fragment>
            <div className="hp-main">
                <div className="hp-info">
                    <h1>שלום {user && user.name}</h1>
                    <h2>אשר את המייל כדי להמשיך</h2>
                </div>
            </div>
            <SendEmail user={user} />
        </Fragment>
    )
}
export default NotVerify
