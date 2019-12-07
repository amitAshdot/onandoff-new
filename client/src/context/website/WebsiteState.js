import React, { useReducer } from 'react';
import axios from 'axios';
import WebsiteContext from './WebsiteContext';
import WebsiteReducer from './WebsiteReducer'
import {
    ADD_WEBSITE,
    DELETE_WEBSITE,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_WEBSITE,
    WEBSITE_ERROR,
    GET_WEBSITE,
    CLEAR_WEBSITES,
} from '../type';

const WebsiteState = props => {
    const initialState = {
        websites: [],
        current: null,
        error: null,
        deleteFlag:false
    };
    const [state, dispatch] = useReducer(WebsiteReducer, initialState);

    //Get website
    const getWebsites = async (website) => {
        try {
            const res = await axios.get('/api/websites');
            dispatch({ type: GET_WEBSITE, payload: res.data });

        } catch (err) {
            dispatch({
                type: WEBSITE_ERROR, payload: err.response.msg
            })
        }
    }

    //Add website
    const addWebsite = async (website) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/websites', website, config);
            
            dispatch({ type: ADD_WEBSITE, payload: res.data });

        } catch (err) {
            console.log(err);
            dispatch({
                type: WEBSITE_ERROR, payload: err.response.msg
            })
        }
    }
    //update website
    const updateWebsite = async website => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.put(`/api/websites/${website._id}`, website, config);
            dispatch({ type: UPDATE_WEBSITE, payload: res.data })

        } catch (err) {
            console.log(err);
            dispatch({
                type: WEBSITE_ERROR, payload: err.response.msg
            })
        }
    }
    //delete website
    const deleteWebsite = async (website) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {  
            const res = await axios.put(`/api/websites/${website._id}`, website.isShow='false' , config);
            dispatch({ type: DELETE_WEBSITE, payload: res.data })
        } catch (err) {
            dispatch({
                type: WEBSITE_ERROR, payload: err
            })
        }
    }
    //clear websites
    const clearWebsites = () => {
        dispatch({ type: CLEAR_WEBSITES })
    }
    // set  current website
    const setCurrent = (website) => {
        dispatch({ type: SET_CURRENT, payload: website })
    }
    //clear current website
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

    //filter website
    // const filterWebsite = text => {
    //     dispatch({ type: FILTER_WEBSITE, payload: text })
    // }
    //clear filter
    // const clearFilter = () => {
    //     dispatch({ type: CLEAR_FILTER })
    // }
    return (
        <WebsiteContext.Provider value={{
            websites: state.websites,
            current: state.current,
            error: state.error,
            deleteFlag: state.deleteFlag,
            addWebsite,
            deleteWebsite,
            setCurrent,
            clearCurrent,
            getWebsites,
            clearWebsites,
            updateWebsite,
        }} >

            {props.children}
        </WebsiteContext.Provider>
    )

};
export default WebsiteState;