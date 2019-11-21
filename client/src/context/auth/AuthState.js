import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOG_OUT,
    CLEAR_ERROR,
    // CREATE_FILE
} from '../type';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        user: null,
        loading: true,
        error: null,
        users: []
    };
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //Load User
    const loadUser = async () => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }
        try {
            const res = await axios.get('/api/auth');
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        } catch (err) {
            dispatch({ type: AUTH_ERROR });
        }
    }
    //Register User
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },

        }

        try {
            const res = await axios.post('/api/users', formData, config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            loadUser();
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            });
        }
    }
    //Login User
    const login = async (formData) => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }
        
        try {
            const res = await axios.post('/api/auth', formData, config);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            loadUser();
        } catch (err) {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.msg
            });
        }
    }
    //LogOut
    const logout = () => {
        dispatch({ type: LOG_OUT })
    }
    //Clear errors
    const clearErr = () => dispatch({ type: CLEAR_ERROR });

    //Get all Users
    const getUsers = async () => {
    }


    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                isAdmin: state.isAdmin,
                user: state.user,
                loading: state.loading,
                error: state.error,
                loadUser,
                register,
                login,
                logout,
                clearErr,
                getUsers,
                
            }} >

            {props.children}
        </AuthContext.Provider>
    )

};
export default AuthState;