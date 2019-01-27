import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CHECK_AUTH,
  LOGOUT
} from "./actionTypes";

export const loginRequest = (email, password) => ({
  type: LOGIN_REQUEST,
  payload: {
    email,
    password
  }
});

export const loginSuccess = ({ token }) => ({
  type: LOGIN_SUCCESS,
  payload: {
    token
  }
});

export const loginError = error => ({
  type: LOGIN_ERROR,
  payload: {
    error
  }
});

export const checkAuth = () => ({
  type: CHECK_AUTH
});

export const logout = () => ({
  type: LOGOUT
});
