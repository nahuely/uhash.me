import { SET_TOKEN, REMOVE_TOKEN } from "../actions/auth.js";

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload.token;
    case REMOVE_TOKEN:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const authSelector = state => state.auth;
