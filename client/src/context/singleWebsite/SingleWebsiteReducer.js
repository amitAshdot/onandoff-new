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

export default (state, action) => {
    switch (action.type) {
        case GET_WEBSITE:
            return {
                ...state,
                websites: action.payload,
                loading: false
            }
        case CLEAR_WEBSITES:
            return {
                ...state,
                websites: [],
                filter: null,
                error: null,
                current: null
            }

        case SET_CURRENT:
            debugger;
            console.log(action.payload)
            return {
                ...state,
                current: action.payload,

            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null,

            }

        default:
            return state;
    }
}