import React, { useContext } from 'react'
import AuthContext from '../../context/auth/AuthContext'
import { Route, Redirect } from 'react-router-dom';
import WebsiteContext from '../../context/website/WebsiteContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, loading, user } = authContext;
    const websiteContext = useContext(WebsiteContext);
    const { current } = websiteContext;
    const temp = isAuthenticated && !current ? '/' : '/login'
    return (
        <Route {...rest} render={props => !isAuthenticated && !current ? (
            <Redirect to={temp} />) :
            (
                <Component {...props} />
            )
        } />

    )
}

export default PrivateRoute
