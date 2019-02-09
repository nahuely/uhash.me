import { combineReducers } from "redux";

import notification from "./notification";
import shortener from "./shortener";
import auth from "./auth";
import ui from "./ui";
import link from './link';

export default combineReducers({
  auth,
  shortener,
  ui,
  notification,
  link,
});
