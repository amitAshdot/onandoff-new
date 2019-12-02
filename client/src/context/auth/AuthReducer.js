import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOG_OUT,
    CLEAR_ERROR,
    IS_ADMIN,
    GET_USERS,
    CREATE_FILE,
    VERIFY_USER


} from '../type';

export default (state, action) => {
    switch (action.type) {

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isVerified: action.payload.isVerified,
                loading: false,
                user: action.payload
            }
        case IS_ADMIN:
            return {
                ...state,
                isAdmin: true
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }

        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOG_OUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            }
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            document.getElementById("error").innerHTML = "המייל והסיסמה לא מתאימים";
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            }

        case VERIFY_USER:
            return {
                ...state,
                user: action.payload,
                isVerified: true,
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}