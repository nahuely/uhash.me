// feature name
import { LINKS } from './links';

export const LINK = "[Link]";

// action types
export const CREATE_LINK = `${LINK} CREATE`;
export const UPDATE_LINK = `${LINK} UPDATE`;
export const GET_LINKS = `${LINK} GET`;
export const GET_LINK_BY_ID = `${LINK} GET LINK BY ID`;

export const GET_LINKS_PAGE = `${LINKS} GET PAGE`;
export const SET_LINKS_PAGE = `${LINKS} SET PAGE`;

export const ADD_LINK = `${LINK} ADD`;
export const ADD_ALL_LINKS = `${LINK} ADD ALL`;
export const MODIFY_LINK = `${LINK} MODIFY`;
export const SELECT_LINK = `${LINK} SELECT`;

export const CLEAR_LINK_STATE = `${LINK} CLEAR STATE`;

// action creators
const createLink = link => ({
  type: CREATE_LINK,
  payload: link
});

const updateLink = updatedProps => ({
  type: CREATE_LINK,
  payload: updatedProps
});

const getLinks = () => ({
  type: GET_LINKS
});

const getLinkDetail = id => ({
  type: GET_LINK_BY_ID,
  payload: id
});

const addLink = (id, link) => ({
  type: ADD_LINK,
  payload: {
    id,
    link
  }
});

const addAllLinks = links => ({
  type: ADD_ALL_LINKS,
  payload: links
});

const modifyLink = (id, updatedProps) => ({
  type: MODIFY_LINK,
  payload: {
    id,
    updatedProps
  }
});

const selectLink = id => ({
  type: SELECT_LINK,
  payload: id
});

const clearState = () => ({
  type: CLEAR_LINK_STATE
});

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
