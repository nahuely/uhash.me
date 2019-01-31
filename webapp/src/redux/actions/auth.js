// feature name
export const AUTH = "[Auth]";

// action types
export const LOGIN = `${AUTH} LOGIN`;
export const LOGOUT = `${AUTH} LOGOUT`;
export const SET_TOKEN = `${AUTH} SET TOKEN`;
export const REMOVE_TOKEN = `${AUTH} REMOVE TOKEN`;

// action creators
export const login = (email, password) => ({
  type: LOGIN,
  payload: {
    email,
    password
  }
});

export const logout = () => ({
  type: LOGOUT
});

export const setToken = token => ({
  type: SET_TOKEN,
  payload: token
});

export const removeToken = () => ({
  type: REMOVE_TOKEN
});
