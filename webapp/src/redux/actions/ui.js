// action types
export const SET_LOADER = "SET_LOADER";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

// action creators
export const setLoader = ({ state, feature }) => ({
  type: `${feature} ${SET_LOADER}`,
  payload: state,
  meta: { feature }
});

export const changeLanguage = lang => ({
  type: CHANGE_LANGUAGE,
  meta: { lang }
});

export const setLanguage = lang => ({
  type: SET_LANGUAGE,
  payload: lang
});
