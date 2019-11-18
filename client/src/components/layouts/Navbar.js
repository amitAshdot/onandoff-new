import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/AuthContext'
const Navbar = (props) => {

    const authContext = useContext(AuthContext);
    const { isAuthenticated, isAdmin, logout, user } = authContext;

    const onLogout = () => {
        logout();
    }
        let navLinks =  (
            <Fragment>
            <li>
                <Link to='/' >עמוד הבית</Link>
            </li>
            <li>
                <Link to='/about' >אודות</Link>
            </li>
            <li>
                <Link to='/login' >התחבר</Link>
            </li>
            <li>
                <Link to='/register' >הירשם</Link>
            </li>
        </Fragment>
        )
            
        if(user){
            navLinks = (
                <Fragment>
                <li>
                    <Link to='/' >עמוד הבית</Link>
                </li>
    
                {user.isAdmin ? <li><Link to='/admin' >עמוד אדמין</Link></li> : null}
    
                <li>
                    <Link to='/about' >אודות</Link>
                </li>
                <li>
                    <a onClick={onLogout} href="/">
                        <i ></i><span className='hide-sm'>התנתק</span>
                    </a>
                </li>
            </Fragment>
            )
        }

    return (
        <div className="navbar">
            <h1>
                <i className={props.icon} /> {props.title}
            </h1>
            <ul>
                { navLinks }
            </ul>
        </div>
    )
}
Navbar.defaultProps = {
    title: 'OnAndOff',
    icon: 'fa fa-calendar'
}
export default Navbar
