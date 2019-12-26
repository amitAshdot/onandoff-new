import {
    SET_CURRENT,
    CLEAR_CURRENT,
    GET_TIMER_PLUS,
    CLEAR_TIMER_PLUS,

} from '../type';

export default (state, action) => {
    switch (action.type) {
        case GET_TIMER_PLUS:
            return {
                ...state,
                timersPlus: action.payload,
                loading: false
            }
        case CLEAR_TIMER_PLUS:
            return {
                ...state,
                timersPlus: [],
                filter: null,
                error: null,
                current: null
            }

        case SET_CURRENT:
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