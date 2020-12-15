"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var token = null;
var admin = null;
var isAuthenticated = false;
var jwtToken = window.localStorage.getItem('jwtToken');
var adminStorage = JSON.parse(window.localStorage.getItem('admin'));

if (jwtToken) {
  token = jwtToken;
  isAuthenticated = true;
}

if (adminStorage) {
  admin = adminStorage;
}

var initialState = {
  token: token,
  admin: admin,
  isAuthenticated: isAuthenticated,
  isAuthenticating: false,
  error: null
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'AUTH_LOGIN_REQUEST':
      return _objectSpread({}, state, {
        isAuthenticating: true
      });

    case 'AUTH_LOGIN_ERROR':
      return _objectSpread({}, state, {
        isAuthenticating: false,
        error: action.error
      });

    case 'AUTH_LOGIN_SUCCESS':
      return _objectSpread({}, state, {
        token: action.token,
        admin: action.admin,
        isAuthenticated: true,
        isAuthenticating: false
      });

    case 'AUTH_UPDATE_SUCCESS':
      return _objectSpread({}, state, {
        admin: action.admin
      });

    case 'AUTH_REFRESH_ADMIN':
      return _objectSpread({}, state, {
        admin: action.admin
      });

    case 'AUTH_LOGOUT_SUCCESS':
      return {
        token: null,
        admin: null,
        isAuthenticated: false,
        isAuthenticating: false
      };

    default:
      return state;
  }
};

exports["default"] = _default;