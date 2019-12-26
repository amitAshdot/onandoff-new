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
        case ADD_WEBSITE:
            return {
                ...state,
                website: action.payload,
                loading: false,
                current: action.payload,

            };
        case UPDATE_WEBSITE:
            return {
                ...state,
                websites: state.websites.map(website =>
                    website._id === action.payload._id ? action.payload : website
                ),
                loading: false
            }
        case DELETE_WEBSITE:

            return {
                ...state,
                websites: state.websites.map(website => {
                    if (website._id === action.payload._id)
                        website.isShow = 'false'
                    return website
                }),
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
            return {
                ...state,
                current: action.payload,

            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null,

            }
        case WEBSITE_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false

            }
        default:
            return state;
    }
}