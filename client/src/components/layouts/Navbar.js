import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/AuthContext'
const Navbar = (props) => {

    const authContext = useContext(AuthContext);
    const { logout, user } = authContext;

    const onLogout = () => {
        logout();
    }
    let navLinks = (
        <Fragment>
            <div className="right">
                <li >
                    <Link to='/' >עמוד הבית</Link>
                </li>
                <li >
                    <Link to='/about' >אודות</Link>
                </li>
                <li >
                    <Link to='/how-it-works' >איך זה עובד</Link>
                </li>
            </div>
            <div className="left">
                <li >
                    <Link to='/login' >התחבר</Link>
                </li>
                <li >
                    <Link to='/register' >הירשם</Link>
                </li>
            </div>

        </Fragment>
    )

    if (user) {
        navLinks = (
            <Fragment>
                <div className="right">
                    <li>
                        <Link to='/' >הטיימרים שלי</Link>
                    </li>
                    {user.isAdmin ? <li><Link to='/admin' >עמוד אדמין</Link></li> : null}
                    <li>
                        <Link to='/about' >אודות</Link>
                    </li>
                    <li >
                        <Link to='/how-it-works' >איך זה עובד</Link>
                    </li>
                </div>
                <div className="left">
                    <li>
                        <a onClick={onLogout} href="/">
                            <i ></i><span className='hide-sm'>התנתק</span>
                        </a>
                    </li>
                </div>
            </Fragment>
        )
    }

    return (
        <div className="navbar">
                <h1 className="logotxt" id="logo"><Link to="/" >
                    <i className={props.icon} /> {props.title}
                    </Link></h1>
            <ul>
                {navLinks}
            </ul>
        </div>
    )
}
Navbar.defaultProps = {
    title: 'OnAndOff',
    icon: 'fa fa-calendar'
}
export default Navbar
