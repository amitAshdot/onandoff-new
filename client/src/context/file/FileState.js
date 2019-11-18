import React, { useReducer } from 'react';
import axios from 'axios';
import FileContext from './FileContext';
import FileReducer from './FileReducer'
import {
    CREATE_FILE,

} from '../type';

const WebsiteState = props => {
    const initialState = {
        websites: [],
        current: null,
        error: null
    };
    const [state, dispatch] = useReducer(FileReducer, initialState);

    //Creat File
    const createFile = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }
        try {
            const res = await axios.post('/api/file', formData, config);
            dispatch({
                type: CREATE_FILE,
                payload: res.data
            });
        } catch (err) {
            dispatch({

                payload: err.response.data.msg
            });
        }
    }
    return (
        <FileContext.Provider value={{
            CREATE_FILE,

        }} >

            {props.children}
        </FileContext.Provider>
    )

};
export default WebsiteState;