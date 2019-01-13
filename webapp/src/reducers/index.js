import { combineReducers } from "redux";
import loginReducer from "./login";
import shortenerReducer from "./shortener";

export default combineReducers({
  auth: loginReducer,
  shortener: shortenerReducer
});
