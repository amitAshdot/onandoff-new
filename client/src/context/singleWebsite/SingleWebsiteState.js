import React, { useReducer } from 'react';
import axios from 'axios';
import WebsiteContext from './SingleWebsiteContext';
import WebsiteReducer from './SingleWebsiteReducer'
import {
    SET_CURRENT,
    CLEAR_CURRENT,
    WEBSITE_ERROR,
    GET_WEBSITE,
    CLEAR_WEBSITES,
} from '../type';

const SingleWebsiteState = props => {
    const initialState = {
        websites: null,
        current: null,
        error: null,
        deleteFlag:false
    };
    const [state, dispatch] = useReducer(WebsiteReducer, initialState);

    //Get website
    const getSingleWebsite = async (id) => {
        console.log(id)
        try {
            const res = await axios.get(`/api/website?${id}`);
            dispatch({ type: GET_WEBSITE, payload: res.data });
        } catch (err) {
            dispatch({
                type: WEBSITE_ERROR, payload: err.response.msg
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
    return (
        <WebsiteContext.Provider value={{
            websites: state.websites,
            current: state.current,
            error: state.error,
            deleteFlag: state.deleteFlag,
            setCurrent,
            clearCurrent,
            getSingleWebsite,
            clearWebsites,
        }} >

            {props.children}
        </WebsiteContext.Provider>
    )

};
export default SingleWebsiteState;