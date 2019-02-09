import {
  LINK,
  CREATE_LINK,
  UPDATE_LINK,
  GET_LINKS,
  GET_LINK_BY_ID,
  addLink,
  modifyLink,
  selectLink
} from '../../actions/link';

import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/api';
import { GET_LINKS_PAGE, setLinksPage } from '../../actions/links';
import { API_ERROR, API_SUCCESS, apiRequest, apiSuccess } from '../../actions/api';
import endpoints from '../../../config/endpoints';
import { setLoader } from '../../actions/ui';
import { setNotification } from '../../actions/notification';

export default () => next => action => {
  next(action);

  switch (action.type) {
    case CREATE_LINK:
      next(
        apiRequest({
          body: { originalURL: action.payload },
          method: 'POST',
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
          method: 'POST',
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
          method: 'GET',
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
          method: 'GET',
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

    case GET_LINKS_PAGE:
      next(
        // apiRequest({
        //   body: action.payload,
        //   method: 'GET',
        //   url: endpoints.links,
        //   feature: GET_LINKS_PAGE,
        // })
        apiSuccess({
          type: `${GET_LINKS_PAGE} ${API_SUCCESS}`,
          payload: Array(action.payload.pageSize)
            .map((_, index) => ({
                url: 'url ' + (index + action.payload.pageSize * action.payload.page),
                shortUrl: 'shortUrl ' + (index + action.payload.pageSize * action.payload.page),
                numberClicks: Math.floor(Math.random() * 10000),
              })
            )
        })
      );
      next(setLoader({ state: true, feature: GET_LINKS_PAGE }));
      break;

    case `${GET_LINKS_PAGE} ${API_SUCCESS}`:
      next(setLinksPage({ page: action.payload }));
      next(setLoader({ state: false, feature: GET_LINKS_PAGE }));
      break;

    case `${GET_LINKS_PAGE} ${API_ERROR}`:
      next(
        setNotification({ message: action.payload.message, feature: GET_LINKS_PAGE })
      );
      next(setLoader({ state: false, feature: GET_LINKS_PAGE }));
      break;
  }
};
