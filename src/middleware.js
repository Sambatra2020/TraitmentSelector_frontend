import setToken from './axios';

export const tokenMiddleware = store => next => action => {
    switch (action.type) {
        case 'AUTH_LOGIN_SUCCESS':
            window.localStorage.setItem('jwtToken', action.token);
            window.localStorage.setItem('admin', JSON.stringify(action.admin));
            setToken(action.token);
            break;
        default:
    }

    next(action);
}