import { combineReducers } from "redux";

import notification from "./notification";
import shortener from "./shortener";
import auth from "./auth";
import ui from "./ui";

export default combineReducers({
  auth,
  shortener,
  ui,
  notification
});
