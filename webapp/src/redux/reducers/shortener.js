import { SET_SHORTENER, CLEAR_SHORTENER } from "../actions/shortener";

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SHORTENER:
      return action.payload.shortener;
    case CLEAR_SHORTENER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
