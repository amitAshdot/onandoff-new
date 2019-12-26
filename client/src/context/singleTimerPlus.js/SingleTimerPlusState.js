import React, { useReducer } from 'react';
import axios from 'axios';
import SingleTimerPlusContext from './SingleTimerPlusContext';
import SingleTimerPlusReducer from './SingleTimerPlusReducer'
import {

    SET_CURRENT,
    CLEAR_CURRENT,
    TIMER_PLUS_ERROR,
    GET_TIMER_PLUS,
    CLEAR_TIMER_PLUS,
} from '../type';

const SingleTimerPlusState = props => {
    const initialState = {
        timersPlus: [],
        currentTimerPlus: null,
        error: null,
        deleteFlag:false
    };
    const [state, dispatch] = useReducer(SingleTimerPlusReducer, initialState);

    //Get timersPlus
    const getTimersPlus = async (timersPlus) => {
        try {
            const res = await axios.get(`/api/timerplus?${id}`);
            dispatch({ type: GET_TIMER_PLUS, payload: res.data });

        } catch (err) {
            dispatch({
                type: TIMER_PLUS_ERROR, payload: err
            })
        }
    }

    //clear timersPlus
    const clearTimerPlus = () => {
        dispatch({ type: CLEAR_TIMER_PLUS })
    }
    // set  current timersPlus
    const setCurrentTimerPlus = (timersPlus) => {
        dispatch({ type: SET_CURRENT, payload: timersPlus })
    }
    //clear current timersPlus
    const clearCurrentTimerPlus = () => {
        dispatch({ type: CLEAR_CURRENT })
    }
    return (
        <SingleTimerPlusContext.Provider value={{
            timersPlus: state.timersPlus,
            currentTimerPlus: state.current,
            error: state.error,
            deleteFlag: state.deleteFlag,
            addTimerPlus,
            deleteTimerPlus,
            setCurrentTimerPlus,
            clearCurrentTimerPlus,
            getTimersPlus,
            clearTimerPlus,
            updateTimerPlus,
        }} >

            {props.children}
        </SingleTimerPlusContext.Provider>
    )

};
export default SingleTimerPlusState;