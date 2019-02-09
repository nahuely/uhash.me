// feature name
export const LINKS = '[Links]';

// action types
export const GET_LINKS_PAGE = `${LINKS} GET PAGE`;
export const SET_LINKS_PAGE = `${LINKS} SET PAGE`;

// action creators
export const getLinksPage = (page, pageSize) => ({
  type: GET_LINKS_PAGE,
  payload: {
    page,
    pageSize,
  }
});

export const setLinksPage = linksPage => ({
  type: SET_LINKS_PAGE,
  payload: linksPage,
});
