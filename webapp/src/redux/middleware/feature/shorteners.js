import {
  SHORTENER,
  CREATE_SHORTENER,
  setShortener
} from "../../actions/shortener";

import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api";
import { setLoader } from "../../actions/ui";
import { setNotification } from "../../actions/notification";
import endpoints from "../../../config/endpoints";

export default () => next => action => {
  next(action);

  switch (action.type) {
    case CREATE_SHORTENER:
      next(
        apiRequest({
          body: { originalURL: action.payload },
          method: "POST",
          url: endpoints.shortener,
          feature: SHORTENER
        })
      );
      next(setLoader({ state: true, feature: SHORTENER }));
      break;

    case `${SHORTENER} ${API_SUCCESS}`:
      next(setShortener({ shortener: action.payload }));
      next(setLoader({ state: false, feature: SHORTENER }));
      break;

    case `${SHORTENER} ${API_ERROR}`:
      next(
        setNotification({ message: action.payload.message, feature: SHORTENER })
      );
      next(setLoader({ state: false, feature: SHORTENER }));
      break;
  }
};
