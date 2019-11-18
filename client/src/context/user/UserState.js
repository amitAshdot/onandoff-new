import React , {useReducer} from 'react';
import uuid from 'uuid';
import UserContext from './UserContext';
import UserReducer from './UserReducer'
import {
    ADD_WEBSITE,    
    DELET_WEBSITE,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_WEBSITE,
    FILTER_WEBSITE,
    CLEAR_FILTER
} from '../type';

const UserState = props =>{
    const initialState ={
        users: [
        ]
    };
    const [state, dispatch] = useReducer(UserReducer, initialState);

    //add user
    //delete user
    //set  current user
    //clear current user
    //update user
    //filter user
    //clear filter

    return (
        <UserContext.Provider value={{
            users: state.users
        }} >

         {props.children}
        </UserContext.Provider>
    )

};
export default UserState;