"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authRefreshAdmin = exports.AUTH_REFRESH_ADMIN = exports.adminLogoutAttempt = exports.adminUpdateAttempt = exports.adminLoginAttempt = exports.authUpdateSuccess = exports.authLogoutSuccess = exports.authLoginSuccess = exports.authLoginError = exports.authLoginRequest = exports.AUTH_UPDATE_SUCCESS = exports.AUTH_LOGOUT_SUCCESS = exports.AUTH_LOGIN_SUCCESS = exports.AUTH_LOGIN_ERROR = exports.AUTH_LOGIN_REQUEST = void 0;

var _axios = _interopRequireDefault(require("../../axios"));

var _history = _interopRequireDefault(require("../../history"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
exports.AUTH_LOGIN_REQUEST = AUTH_LOGIN_REQUEST;
var AUTH_LOGIN_ERROR = 'AUTH_LOGIN_ERROR';
exports.AUTH_LOGIN_ERROR = AUTH_LOGIN_ERROR;
var AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
exports.AUTH_LOGIN_SUCCESS = AUTH_LOGIN_SUCCESS;
var AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS';
exports.AUTH_LOGOUT_SUCCESS = AUTH_LOGOUT_SUCCESS;
var AUTH_UPDATE_SUCCESS = 'AUTH_UPDATE_SUCCESS';
exports.AUTH_UPDATE_SUCCESS = AUTH_UPDATE_SUCCESS;

var authLoginRequest = function authLoginRequest() {
  return {
    type: AUTH_LOGIN_REQUEST
  };
};

exports.authLoginRequest = authLoginRequest;

var authLoginError = function authLoginError(error) {
  return {
    type: AUTH_LOGIN_ERROR,
    error: error
  };
};

exports.authLoginError = authLoginError;

var authLoginSuccess = function authLoginSuccess(token, admin) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    token: token,
    admin: admin
  };
};

exports.authLoginSuccess = authLoginSuccess;

var authLogoutSuccess = function authLogoutSuccess() {
  return {
    type: AUTH_LOGOUT_SUCCESS
  };
};

exports.authLogoutSuccess = authLogoutSuccess;

var authUpdateSuccess = function authUpdateSuccess(admin) {
  return {
    type: AUTH_UPDATE_SUCCESS,
    admin: admin
  };
};

exports.authUpdateSuccess = authUpdateSuccess;

var adminLoginAttempt = function adminLoginAttempt(_ref) {
  var email = _ref.email,
      password = _ref.password;
  return function (dispatch) {
    dispatch(authLoginRequest());
    return _axios["default"].post('/login', {
      email: email,
      password: password
    }).then(function (response) {
      console.log(response.data);

      if (response.data.error === "Mot de passe ou email incorrect") {
        var message = 'email ou mot de passe incorrect';
        dispatch(authLoginError(message));
      } else {
        var token = response.data.token;
        var admin = response.data.admin ? response.data.admin : null;
        dispatch(authLoginSuccess(token, admin));

        _history["default"].push('/');
      }
    })["catch"](function (error) {
      var status = null;

      if (error.response) {
        if (error.response.status) {
          status = error.response.status;
        }
      }

      console.log('/auth/login[error]', error);
      var message = '';

      if (401 === status) {
        message = 'Utilisateur ou mot de passe incorrect';
      } else if (500 === status) {
        message = 'Une erreur est survenue. Réessayer à nouveau !';
      }

      dispatch(authLoginError(message));
    });
  };
};

exports.adminLoginAttempt = adminLoginAttempt;

var adminUpdateAttempt = function adminUpdateAttempt(admin, values) {
  return function (dispatch) {
    _axios["default"].put("/admins/".concat(admin.id), values).then(function (response) {
      if (response.status === 200) {
        console.log(response.data);
        var _admin = response.data.admin;
        console.log(_admin);
        dispatch(authUpdateSuccess(_admin));
      }
    });
  };
};

exports.adminUpdateAttempt = adminUpdateAttempt;

var adminLogoutAttempt = function adminLogoutAttempt() {
  return function (dispatch) {
    window.localStorage.removeItem('jwtToken');
    window.localStorage.removeItem('admin');

    _history["default"].push('/');

    return dispatch(authLogoutSuccess());
  };
};

exports.adminLogoutAttempt = adminLogoutAttempt;
var AUTH_REFRESH_ADMIN = 'AUTH_REFRESH_ADMIN';
exports.AUTH_REFRESH_ADMIN = AUTH_REFRESH_ADMIN;

var authRefreshAdmin = function authRefreshAdmin(admin) {
  return {
    type: AUTH_REFRESH_ADMIN,
    admin: admin
  };
};

exports.authRefreshAdmin = authRefreshAdmin;