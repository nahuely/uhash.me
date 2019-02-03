import { SET_LOADER, SET_LANGUAGE } from "../actions/ui";

const INITIAL_STATE = {
  loading: false,
  lang: null
};

export default (ui = INITIAL_STATE, action) => {
  switch (true) {
    case action.type.includes(SET_LOADER):
      return { ...ui, loading: action.payload };

    case action.type.includes(SET_LANGUAGE):
      return { ...ui, lang: action.payload };

    default:
      return ui;
  }
};
