import { API_REQUEST, apiError, apiSuccess } from "../../actions/api";
import { authSelector } from "../../selectors/auth";

export default ({ getState, dispatch }) => next => async action => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const token = authSelector(getState());
    const { url, method, feature } = action.meta;
    const body = JSON.stringify(action.payload);

    try {
      const response = await fetch(url, {
        body,
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
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
