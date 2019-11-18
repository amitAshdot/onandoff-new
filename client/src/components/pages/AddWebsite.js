import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext'
import WebsiteForm from '../websites/WebsiteForm'

const AddWebsite = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, user } = authContext;


    useEffect(() => {
        authContext.loadUser();
    }, [authContext]);


    return (
        <div>
            {isAuthenticated ? <WebsiteForm /> : <Link to="/login"><button>התחבר</button></Link>}
        </div>
    )
}
export default AddWebsite
