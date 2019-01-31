import { SET_LOADER } from "../actions/ui";

const INITIAL_STATE = {
  loading: false
};

export default (ui = INITIAL_STATE, action) => {
  switch (true) {
    case action.type.includes(SET_LOADER):
      return { ...ui, loading: action.payload };

    default:
      return ui;
  }
};
