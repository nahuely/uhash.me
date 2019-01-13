import {
  SHORTENER_REQUEST,
  SHORTENER_SUCCESS,
  SHORTENER_ERROR
} from "./actionTypes";

export const shortenerRequest = url => ({
  type: SHORTENER_REQUEST,
  payload: {
    url
  }
});

export const shortenerSuccess = shortener => ({
  type: SHORTENER_SUCCESS,
  payload: {
    shortener
  }
});

export const shortenerError = error => ({
  type: SHORTENER_ERROR,
  payload: {
    error
  }
});
