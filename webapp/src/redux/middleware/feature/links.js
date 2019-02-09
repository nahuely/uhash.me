import {
  LINK,
  CREATE_LINK,
  UPDATE_LINK,
  GET_LINKS,
  GET_LINK_BY_ID,
  addLink,
  modifyLink,
  selectLink
} from "../../actions/link";

import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api";
import { setLoader } from "../../actions/ui";
import { setNotification } from "../../actions/notification";
import endpoints from "../../../config/endpoints";

export default () => next => action => {
  next(action);

  switch (action.type) {
    case CREATE_LINK:
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

    case UPDATE_LINK:
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

    case GET_LINKS:
      next(
        apiRequest({
          body: { originalURL: action.payload },
          method: "GET",
          url: endpoints.shortener,
          feature: SHORTENER
        })
      );
      next(setLoader({ state: true, feature: SHORTENER }));
      break;

    case GET_LINK_BY_ID:
      next(
        apiRequest({
          body: { originalURL: action.payload },
          method: "GET",
          url: endpoints.shortener,
          feature: SHORTENER
        })
      );
      next(setLoader({ state: true, feature: SHORTENER }));
      break;

    case `${LINK} ${API_SUCCESS}`:
      next(setShortener({ shortener: action.payload }));
      next(setLoader({ state: false, feature: SHORTENER }));
      break;

    case `${LINK} ${API_ERROR}`:
      next(
        setNotification({ message: action.payload.message, feature: SHORTENER })
      );
      next(setLoader({ state: false, feature: SHORTENER }));
      break;
  }
};
