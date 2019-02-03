import { setLanguage, CHANGE_LANGUAGE } from "../../actions/ui";

export default ({ dispatch }) => next => action => {
  next(action);

  if (action.type === CHANGE_LANGUAGE) {
    localStorage.setItem("lang", action.meta.lang);
    dispatch(setLanguage(action.meta.lang));
  }
};
