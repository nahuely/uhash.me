import { ROUTE_REDIRECT } from "../../actions/router";
import history from "../../../helpers/history";

export default () => next => action => {
  next(action);

  if (action.type.includes(ROUTE_REDIRECT)) {
    const { path } = action.meta;
    history.push(path);
  }
};
