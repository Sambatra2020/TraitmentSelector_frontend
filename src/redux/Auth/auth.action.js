import axios from '../../axios';
import history from '../../History';


export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_ERROR = 'AUTH_LOGIN_ERROR';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS';
export const AUTH_UPDATE_SUCCESS = 'AUTH_UPDATE_SUCCESS';

export const authLoginRequest = () => ({
    type: AUTH_LOGIN_REQUEST
});

export const authLoginError = (error) => ({
    type: AUTH_LOGIN_ERROR,
    error
});

export const authLoginSuccess = (token, admin) => ({
    type: AUTH_LOGIN_SUCCESS,
    token,
    admin
});

export const authLogoutSuccess = () => ({
    type: AUTH_LOGOUT_SUCCESS
});

export const authUpdateSuccess = (admin) => ({
    type: AUTH_UPDATE_SUCCESS,
    admin: admin
});

export const adminLoginAttempt = ({ adminname, password }) => {
    return (dispatch) => {
        dispatch(authLoginRequest());
        return axios.post('/login', {
            adminname: adminname,
            password: password
        }).then(response => {
            console.log(response.data)
            if (response.data.error === "Invalid adminname or password") {
                
                
                const message = 'admin name ou mot de passe incorrect';

                dispatch((authLoginError(message)))
            } else {
                const token = response.data.token;
                const admin = response.data.admin ? response.data.admin : null;

                dispatch((authLoginSuccess(token, admin)))
                history.push('/AdminPage');
                window.location.reload()
            }
        }).catch(error => {
            let status = null;

            if (error.response) {
                if (error.response.status) {
                    status = error.response.status;
                }
            }

            console.log('/auth/login[error]', error);
            
            let message = '';

            if (401 === status) {
                message = 'Utilisateur ou mot de passe incorrect';
            } else if (500 === status) {
                message = 'Une erreur est survenue. Réessayer à nouveau !';
            }
            
            dispatch((authLoginError(message)))
        })
    }
}


export const adminUpdateAttempt = (admin, values) => {
    return (dispatch) => {
        axios.put(`/admins/${admin.id}`, values)
        .then(response => {
            if (response.status === 200) {
                console.log(response.data)
                const { admin } = response.data;
                console.log(admin);
                dispatch(authUpdateSuccess(admin));
            }
        })
    }
}


export const adminLogoutAttempt = () => {
    return (dispatch) => {
        window.localStorage.removeItem('jwtToken');
        window.localStorage.removeItem('admin');
        history.push('/');
        return dispatch(authLogoutSuccess());
    }
    
}

export const AUTH_REFRESH_ADMIN = 'AUTH_REFRESH_ADMIN';

export const authRefreshAdmin = (admin) => {
    return {
        type: AUTH_REFRESH_ADMIN,
        admin
    }
}