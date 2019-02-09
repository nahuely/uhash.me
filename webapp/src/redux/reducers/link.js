import {
  ADD_LINK,
  ADD_ALL_LINKS,
  MODIFY_LINK,
  SELECT_LINK,
  CLEAR_LINK_STATE,
  SET_LINKS_PAGE,
} from "../actions/link";

const INITIAL_STATE = {
  selectedLinkId: null,
  links: {},
  filter: null,
  orderBy: null,
  listOfLinks: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_LINK: {
      const { id, link } = action.payload;
      return {
        links: {
          ...state.links,
          [id]: { ...link }
        }
      };
    }
    case ADD_ALL_LINKS:
      const links = action.payload;
      return {
        ...INITIAL_STATE,
        links: links.reduce((acc, curr) => (acc[curr.id] = curr), {})
      };

    case MODIFY_LINK:
      const { id, updatedProps } = action.payload;
      return {
        link: {
          ...state.links,
          [id]: { ...state.links[id], ...updatedProps }
        }
      };
    case SELECT_LINK:
      return {
        selectedLinkId: action.payload
      };
    case CLEAR_LINK_STATE:
      return INITIAL_STATE;
    case SET_LINKS_PAGE:
      return {
        ...state,
        listOfLinks: [...state.listOfLinks, ...action.payload.page]
      };

    default:
      return state;
  }
};
