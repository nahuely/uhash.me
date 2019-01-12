import { LOGIN } from "./actionTypes";

export const loginAction = () => dispatch => {
  dispatch({
    type: LOGIN,
    payload: {}
  });
};
