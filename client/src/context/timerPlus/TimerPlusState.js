import React, { useReducer } from 'react';
import axios from 'axios';
import TimerPlusContext from './TimerPlusContext';
import TimerPlusReducer from './TimerPlusReducer'
import {
    ADD_TIMER_PLUS,
    DELETE_TIMER_PLUS,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_TIMER_PLUS,
    TIMER_PLUS_ERROR,
    GET_TIMER_PLUS,
    CLEAR_TIMER_PLUS,
} from '../type';

const TimerPlusState = props => {
    const initialState = {
        timersPlus: [],
        currentTimerPlus: null,
        error: null,
        deleteFlag:false
    };
    const [state, dispatch] = useReducer(TimerPlusReducer, initialState);

    //Get timersPlus
    const getTimersPlus = async (timersPlus) => {
        try {
            const res = await axios.get('/api/timersplus');
            dispatch({ type: GET_TIMER_PLUS, payload: res.data });

        } catch (err) {
            dispatch({
                type: TIMER_PLUS_ERROR, payload: err
            })
        }
    }

    //Add timersPlus
    const addTimerPlus  = async (timersPlus) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/timersplus', timersPlus, config);
            
            dispatch({ type: ADD_TIMER_PLUS, payload: res.data });

        } catch (err) {
            dispatch({
                type: TIMER_PLUS_ERROR, payload: err.response.msg
            })
        }
    }
    //update timersPlus
    const updateTimerPlus = async timersPlus => {
        debugger
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.put(`/api/timersplus/${timersPlus._id}`, timersPlus, config);
            dispatch({ type: UPDATE_TIMER_PLUS, payload: res.data })

        } catch (err) {
            console.log(err);
            dispatch({
                type: TIMER_PLUS_ERROR, payload: err.response.msg
            })
        }
    }
    //delete timersPlus
    const deleteTimerPlus = async (timerPlus) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {  
            // let isShow = 'false'
            console.log( axios.put(`/api/timersplus/${timerPlus._id}`, timerPlus , config))
            const res = await axios.put(`/api/timersplus/${timerPlus._id}`, timerPlus.isShow='false' , config);
            dispatch({ type: DELETE_TIMER_PLUS, payload: res.data })
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
        <TimerPlusContext.Provider value={{
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
        </TimerPlusContext.Provider>
    )

};
export default TimerPlusState;