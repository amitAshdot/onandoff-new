import React, { Fragment, useContext } from 'react';
import UserItem from './UserItem';
import UserContext from '../../context/user/UserContext';
import AuthContext from '../../context/auth/AuthContext'
import WebsiteContext from '../../context/website/WebsiteContext'

const Users = () => {
    const userContext = useContext(UserContext);
    const { users } = userContext;

    const authContext = useContext(AuthContext);
    const { isAuthenticated, isAdmin, user } = authContext;

    const websiteContext = useContext(WebsiteContext);
    const { websites, getWebsites, loading } = websiteContext;

    const adminList = (
        users.map(user => <UserItem key={user.key} user={user} />)
        
        )
        const userList = (
            users.map(user => <UserItem key={user.key} user={user} />)
            
            )

    
    return (
        <Fragment>


                {users.map(user => <UserItem key={user.key} user={user} />)}
        </Fragment>
    )
}

export default Users
