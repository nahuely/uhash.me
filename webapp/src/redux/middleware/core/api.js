import { API_REQUEST, apiError, apiSuccess } from "../../actions/api";

export default ({ dispatch }) => next => action => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const { url, method, feature } = action.meta;
    const body = JSON.stringify(action.payload);

    fetch(url, {
      body,
      method,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => dispatch(apiSuccess({ response, feature })))
      .catch(error => dispatch(apiError({ error: error, feature })));
  }
};
