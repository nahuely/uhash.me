import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "./actionTypes";

export const loginRequest = (email, password) => ({
  type: LOGIN_REQUEST,
  payload: {
    email,
    password
  }
});

export const loginSuccess = token => ({
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
