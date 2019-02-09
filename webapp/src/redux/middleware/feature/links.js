import { GET_LINKS_PAGE, setLinksPage } from '../../actions/links';
import { API_ERROR, API_SUCCESS, apiRequest, apiSuccess } from '../../actions/api';
import endpoints from '../../../config/endpoints';
import { setLoader } from '../../actions/ui';
import { setNotification } from '../../actions/notification';

export default () => next => action => {
  next(action);

  switch (action.type) {
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
}
