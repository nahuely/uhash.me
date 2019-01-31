import { AUTH, LOGIN, setToken, LOGOUT, removeToken } from "../../actions/auth";

import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api";
import { setLoader } from "../../actions/ui";
import { setNotification } from "../../actions/notification";
import { changeRoute } from "../../actions/router";
import endpoints from "../../../config/endpoints";

export default () => next => action => {
  next(action);

  switch (action.type) {
    case LOGIN:
      next(
        apiRequest({
          body: {
            email: action.payload.email,
            password: action.payload.password
          },
          method: "POST",
          url: endpoints.login,
          feature: AUTH
        })
      );
      next(setLoader({ state: true, feature: AUTH }));
      break;

    case LOGOUT:
      localStorage.removeItem("token");
      next(removeToken());
      next(changeRoute({ path: "/", feature: AUTH }));
      break;

    case `${AUTH} ${API_SUCCESS}`:
      next(setToken(action.payload));

      // TODO: move this to a middleware of persistance or create a helper, im not super sure
      localStorage.setItem("token", action.payload.token);

      next(setLoader({ state: false, feature: AUTH }));
      next(changeRoute({ path: "/user/profile/detail", feature: AUTH }));
      break;

    case `${AUTH} ${API_ERROR}`:
      next(setNotification({ message: action.payload.message, feature: AUTH }));
      next(setLoader({ state: false, feature: AUTH }));
      break;
  }
};
