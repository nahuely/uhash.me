import { SET_LINKS_PAGE } from '../actions/links';

const INITIAL_STATE = {
  listOfLinks: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LINKS_PAGE:
      return {
        ...state,
        listOfLinks: [...state.listOfLinks, ...action.payload.page]
      };
    default:
      return state;
  }
}
