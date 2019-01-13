import {
  SHORTENER_REQUEST,
  SHORTENER_SUCCESS,
  SHORTENER_ERROR
} from "../actions/actionTypes";

const INITIAL_STATE = {
  shortener: null,
  error: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHORTENER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case SHORTENER_SUCCESS:
      return {
        ...state,
        loading: false,
        shortener: action.payload.shortener
      };
    case SHORTENER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
