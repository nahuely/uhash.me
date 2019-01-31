// feature name
export const SHORTENER = "[Shortener]";

// action types
export const CREATE_SHORTENER = `${SHORTENER} CREATE`;
export const SET_SHORTENER = `${SHORTENER} SET`;
export const CLEAR_SHORTENER = `${SHORTENER} CLEAR`;

// action creators
export const createShortener = url => ({
  type: CREATE_SHORTENER,
  payload: url
});

export const setShortener = shortener => ({
  type: SET_SHORTENER,
  payload: shortener
});

export const clearShortener = () => ({
  type: `${SHORTENER} CLEAR`
});
