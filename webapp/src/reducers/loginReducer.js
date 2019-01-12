import { LOGIN } from "../actions/actionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
