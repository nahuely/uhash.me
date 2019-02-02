import { API_REQUEST, apiError, apiSuccess } from '../../actions/api';

export default ({ dispatch }) => next => async action => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const { url, method, feature } = action.meta;
    const body = JSON.stringify(action.payload);

    try {
      const response = await fetch(url, {
        body,
        method,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const responseJSON = await response.json();
      const { status } = response;

      if (status < 200 || status > 300) {
        throw new Error(responseJSON.error);
      }
      dispatch(apiSuccess({ response: responseJSON, feature }));
    } catch ({ message }) {
      dispatch(apiError({ error: message, feature }));
    }
  }
};
