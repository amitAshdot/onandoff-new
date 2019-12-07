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

export default (state, action) => {
    switch (action.type) {
        case GET_TIMER_PLUS:
            return {
                ...state,
                timersPlus: action.payload,
                loading: false
            }
        case ADD_TIMER_PLUS:
            return {
                ...state,
                timerPlus: action.payload,
                loading: false,
                current: action.payload,

            };
        case UPDATE_TIMER_PLUS:
            return {
                ...state,
                timersPlus: state.timersPlus.map(timerPlus =>
                    timerPlus._id === action.payload._id ? action.payload : timerPlus
                ),
                loading: false
            }
        case DELETE_TIMER_PLUS:
            debugger
            return {
                ...state,
                timersPlus: state.timersPlus.map(timerPlus => {
                    if (timerPlus._id === action.payload._id)
                    timerPlus.isShow = 'false'
                    return timerPlus
                }),
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
        case TIMER_PLUS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false

            }
        default:
            return state;
    }
}