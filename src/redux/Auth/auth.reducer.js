let token = null;
let admin = null;
let isAuthenticated = false;

const jwtToken = window.localStorage.getItem('jwtToken');
const adminStorage = JSON.parse(window.localStorage.getItem('admin'));

if (jwtToken) {
    token = jwtToken;
    isAuthenticated = true;
}

if (adminStorage) {
    admin = adminStorage;
}

const initialState = {
    token,
    admin,
    isAuthenticated,
    isAuthenticating: false,
    error: null
}

export default(state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_LOGIN_REQUEST':
            return {
                ...state,
                isAuthenticating: true
            }

        case 'AUTH_LOGIN_ERROR':
            return {
                ...state,
                isAuthenticating: false,
                error: action.error
            }

        case 'AUTH_LOGIN_SUCCESS':
            return {
                ...state,
                token: action.token,
                admin: action.admin,
                isAuthenticated: true,
                isAuthenticating: false
            }

        case 'AUTH_UPDATE_SUCCESS':
            return {
                ...state,
                admin: action.admin
            }

        case 'AUTH_REFRESH_ADMIN':
                return {
                    ...state,
                    admin: action.admin
                }

        case 'AUTH_LOGOUT_SUCCESS':
            return {
                token: null,
                admin: null,
                isAuthenticated: false,
                isAuthenticating: false
            }
            
        default: 
            return state
    }
}