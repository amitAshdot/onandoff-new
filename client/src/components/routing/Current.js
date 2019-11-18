import React, { useContext } from 'react'
import AuthContext from '../../context/auth/AuthContext'
import { Route, Redirect } from 'react-router-dom';
import WebsiteContext from '../../context/website/WebsiteContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, loading } = authContext;


    const websiteContext = useContext(WebsiteContext);
    const {  current } = websiteContext;

    return (
        <Route {...rest} render={props => !current && !loading ? (
            <Redirect to="/" />) :
            (
                <Component {...props} />
            )
        } />

    )
}

export default PrivateRoute
